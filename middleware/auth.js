import jwt from "jsonwebtoken";
import { User } from "../model/userModel.js";

export const isAuth = async (req, res, next) => {
    try {
        const { Token } = req.cookies;
        if (!Token) {
            return res.status(404).json({
                success: true,
                message: "Please Login First",
            })
        }
        const decoded = await jwt.verify(Token, process.env.JWT_SECRATE);
        req.user = await User.findById(decoded);
        next();
    } catch (error) {
        console.log(error);
    }
}