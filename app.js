import { configDotenv } from "dotenv"
import express from "express"
import { userRoute } from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();
configDotenv({
    path: './database/config.env'
})
app.use(express.json());
app.use(cookieParser())

app.use(userRoute);

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['GET','POST','DELETE','PUT'],
    credentials:true
}))