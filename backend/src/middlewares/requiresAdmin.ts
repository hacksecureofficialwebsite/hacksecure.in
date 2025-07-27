import { NextFunction, Request, Response } from "express";
import prisma from "../config/prisma";

const requiresAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.oidc?.user?.sub;

    if (!userId) {
      return res.status(401).json({ errorMessage: "Unauthorized" });
    }
    const user = await prisma.user.findUnique({
      where: { sub: userId },
    });

    if (!user || !user.isAdmin) {
      return res.status(400).json({ errorMessage: "Admin Access Required!" });
    }
    req.user = user;
    next();
  } catch (err) {
    console.error("Admin check failed:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

export default requiresAdmin;
