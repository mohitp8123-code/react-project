import express from "express";
import cors from "cors";
import db from "./db.js";
import signupRoute from "../routes/Signup.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});


app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1");

    console.log("Database connected:", rows);

    res.json({
      message: "Database connected successfully",
    });
  } catch (error) {
    console.error("Database connection failed:", error);

    res.status(500).json({
      message: "Database connection failed",
    });
  }
});

// Signup Route
app.use("/api", signupRoute);


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
