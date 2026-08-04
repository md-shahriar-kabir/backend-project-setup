import type { Application, Request, Response } from "express";
import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

const app : Application = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser()) 

dotenv.config()

app.get('/', (req:Request, res:Response)=>{
    console.log("App is running")

    res.send({
        success: true,
        message:"app is running "
    })
})

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log("Sever is running")
})