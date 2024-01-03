import jwt from "jsonwebtoken";

export const createCookie = async (user, res, message) => {
    try {
        const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRATE)
        res.status(200).cookie("Token", token, {
            maxAge: 60 * 15 * 1000,
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        }).json({
            success: true,
            message,user
        })
    } catch (error) {
        console.log(error);
    }
}