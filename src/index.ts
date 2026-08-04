import type { Application, Request, Response } from "express";
import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import { email, success } from "zod";

const app : Application = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser()) 

dotenv.config()

app.get('/', (req:Request, res:Response)=>{
    console.log("App is running")

    res.send({
        success: true,
        message:'app is running'
    })
})

//----------------------------Business Logic---------//

app.post('/login', async(req:Request, res:Response)=>{

    // controller

    const {email, password} = req.body

    // service

    const user = {
        email: "shahriar@gmail.com",
        password: 123456
    }
    if(!user) throw new Error('user not found')
        if(user.email !== email || user.password !== password) 
            throw new Error ('Invalid email and password')



    // controller

    res.send({
        success : true,
        message: 'Login Successfully'
    })

})



const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log("Sever is running!")
})