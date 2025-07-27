import { Request, RequestHandler, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookieOptions } from "../../utils/cookieOptions";
import prisma from "../../config/prisma";

const JWT_SECRET = process.env.JWT_SECRET!;
//signup request handler
//
export const signup: RequestHandler = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  const token = jwt.sign(
    { userId: user.id, isAdmin: user.isAdmin, sub: user.sub },
    JWT_SECRET,
  );

  res.cookie("token", token, cookieOptions);

  res.status(200).json({ user });
};

//login request handler
export const login: RequestHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !user.password) {
    return res.status(401).json({ errorMessage: "Invalid credentials" });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ errorMessage: "Invalid credentials" });
  }

  const token = jwt.sign(
    { userId: user.id, isAdmin: user.isAdmin, sub: user.sub },
    JWT_SECRET,
  );

  res.cookie("token", token, cookieOptions);

  res.json({ user });
};

//get user info request handler
export const getMe: RequestHandler = async (req: Request, res: Response) => {
  const authUser = req.oidc?.user;
  if (authUser) {
    return res.status(200).json({ user: authUser });
  }

  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });

    if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json({ user });
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};
