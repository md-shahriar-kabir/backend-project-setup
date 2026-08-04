import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route.js";

const router: Router = Router()

const moduleRouter = [
    {
        path : 'auth',
        router: authRoutes
    },
]

moduleRouter.forEach((module)=>{
    router.use(module.path, module.router)
})

export default router
