// src/routes/v1/index.js
import express from "express";
import authRoutes from "./auth.routes.js";  // ✅ Import auth routes

const router = express.Router();

router.use("/auth", authRoutes);  // ✅ Mount auth routes at /auth

export default router;