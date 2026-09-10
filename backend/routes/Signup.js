import express from "express";
import bcrypt from "bcryptjs";
import db from "../db";


const routes = express.Router();

routes.post("/signup", async (req, res) =>{
    try{
        const { username, email, phone, password } = req.body;

        // check if all fields provide 
        if(!username|| !email || !phone || !password){
            return res.status(400).json({
            message: "All fields are required"
            });
        }

        // check if email is Already exists
        if(existinguser.length > 0){
            return res.status(409).json({
            message: "Email Already Registered"
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user 
        const [result] = await db.query(
            "INSERT INTO users(username, email, phone, password) VALUES (?, ?, ?, ?)",
            [username, email, phone, hashedpassword]
        );

        res.status(201).json({
            message: "Account created Successfully",
            user: {
                id: result.insertId,
                username,
                email,
                phone,
            },
        });
    }catch (error) {
        console.error("signup error:", error);

        res.status(500).json({
        message: "Something went wrong",
        });
    }

    
});

export default router;