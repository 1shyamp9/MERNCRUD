import { app } from "./app.js";
import { DB } from "./database/database.js";

DB;
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on Port : ${process.env.PORT}`);
})