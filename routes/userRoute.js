import express from "express"
import { CreateUser, LoginUser, logoutUser, userProfile } from "../controller/userController.js";
import { isAuth } from "../middleware/auth.js";

export const userRoute = express.Router();

userRoute.post('/new',CreateUser);
userRoute.post('/login',LoginUser);
userRoute.get('/me',isAuth,userProfile);
userRoute.get('/logout',isAuth,logoutUser);