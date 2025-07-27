import { CookieOptions } from "express";

const isProd = process.env.NODE_ENV === "production";

export const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: isProd,
  sameSite: isProd ? "none" : "lax",
  // domain: isProd ? "hacksecure.in" : undefined,
};
