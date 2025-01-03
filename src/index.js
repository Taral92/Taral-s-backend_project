// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectdb from "../db/index.js";

dotenv.config({
    path:'./env'
})

connectdb();





















// import express from "express";
// const app=express();
// (async ()=>{
//     try{
//       await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//       app.on("error",(error)=>{
//         console.log('error:',error);
//         throw error
        
//       })
//        app.listen(process.env.PORT,()=>{
//         console.log(`app is listening on ${process.env.PORT}`);
        
//        })
//     } catch(error){
//       console.log('Error:',error);
      
//     }
// })()