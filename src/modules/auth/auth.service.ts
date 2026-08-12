import { prisma } from "../../lib/prisma.js"
import AppError from "../../utils/AppError.js"

const userLogin = async (email:string, password:number) => {
      const user = {
        email: "shahriar@gmail.com",
        password: 123456
    }

    // await prisma.users.findUnique


    if(!user) throw new Error('user not found')
        if(user.email !== email || user.password !== password) 
            throw new AppError (404, 'Invalid email and password')

    return user
}

export const authService  = {
    userLogin,
}