import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import session from "express-session";
import authRoutes from "./routes/auth";
import { auth0Config } from "./controllers/auth/auth0Config";
import { auth } from "express-openid-connect";
import { cookieOptions } from "./utils/cookieOptions";

const app = express();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://hacksecure-in.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.use(auth(auth0Config));

app.use(
  session({
    secret: process.env.JWT_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: cookieOptions,
  }),
);

app.use("/api/auth", authRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
