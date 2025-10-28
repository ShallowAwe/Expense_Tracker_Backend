import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes/v1/index.js";
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all origins
app.use(helmet()); // Security middleware
app.use(morgan("dev")); // Logging middleware
 

// Basic route
// app.get("/", (req, res) => {
//   res.json({ message: "Expense Tracker Backend is running 🚀" });
// });


app.use("/api/v1", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
