import bcrypt from "bcrypt";
import { User } from "../model/userModel.js";
import { createCookie } from "../utils/cookie.js";

// Create user Account Function =>

export const CreateUser = async (req, res) => {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
        return res.status(404).json({
            success: false,
            message: "Email Already Exists",
        })
    }
    const hashPass = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashPass })
    res.status(201).json({
        success: true,
        message: "Account Created Successfully",
    })
}

// Login user Account Function =>

export const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(404).json({
                success: false,
                message: "Email And Password Incurrect",
            })
        }
        const ComparePass = await bcrypt.compare(password, user.password);
        if (!ComparePass) {
            return res.status(404).json({
                success: false,
                message: "Email And Password Incurrect",
            })
        }
        createCookie(user, res, "Welcome Buddy.. 😉");
    } catch (error) {
        console.log(error);
    }
}

// User Profile Function =>

export const userProfile = async (req, res,next) => {
    try {
        res.status(200).json({
            success: true,
            user: req.user,
        })
    } catch (error) {
        console.log(error);
    }
}

// Logout user Account Function =>

export const logoutUser = async (req, res,next) => {
    try {
        res.status(200).cookie("Token", "", {
            maxAge: new Date(Date.now()),
            httpOnly: false,
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        }).json({
            success: false,
            message: "Logout Successfully"
        })
    } catch (error) {
        console.log(error);
    }
}