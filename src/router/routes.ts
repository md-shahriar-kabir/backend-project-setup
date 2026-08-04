import { Router, type NextFunction } from 'express'
import { authRouter } from '../modules/auth/auth.route.js'

const router: Router = Router()

const moduleRoutes = [
  {
    path: '/auth',

    middleware: [
      (req: Request, res: Response, next: NextFunction) => {
        console.log('api hit successfully1')
        next()
      },
    ],

    router: authRouter,
  },
  
]

moduleRoutes.forEach((module) => {
  router.use(module.path, module.router)
})

export default router