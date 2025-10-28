import express from "express";
import authRoutes from "./auth.routes.js";
import transactionRoutes from "./transaction.routes.js";  // ✅ Check this line

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/transaction", transactionRoutes);  // ✅ Singular, not plural

export default router;