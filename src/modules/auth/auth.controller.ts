import type {Request, Response} from 'express'
import { email } from 'zod';
import { authService } from './auth.service.js';

const userLogin = async (req:Request, res:Response) =>{
    const {email, password} = req.body

    const result  = await authService.userLogin(email,password)

    res.send({
        seccess: true,
        message: "login successfully"
    })
}

export const authController = {
    userLogin,
}