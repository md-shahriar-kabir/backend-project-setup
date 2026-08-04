import type { Application, Request, Response } from "express";
import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import { router } from "./modules/auth/auth.route.js";

export const app : Application = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser()) 

app.use(router)

app.get('/', (req:Request, res:Response)=>{
    console.log("App is running")

    res.send({
        success: true,
        message:'app is running'
    })
})