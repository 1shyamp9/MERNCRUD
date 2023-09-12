import mongoose from "mongoose";

export const DB = mongoose.connect(process.env.MONGO_URI, {
    dbName: "MernCRUD"
}).then((e)=>{
    console.log(`Database is Connected on ${e.connection.host}`);
}).catch((e)=>{
    console.log(e);
})