import { Router } from "express";
import { signup, login } from "../controllers/auth/authController";
import { getMe } from "../controllers/auth/authController";
import { requiresAuth } from "express-openid-connect";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/me", requiresAuth(), getMe);

export default router;
