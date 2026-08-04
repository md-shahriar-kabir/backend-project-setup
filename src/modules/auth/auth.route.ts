import { Router, type NextFunction, type Request, type Response } from 'express'
import { authController } from './auth.controller.js'

const router: Router = Router()

router.post(
  '/login',
  (req: Request, res: Response, next: NextFunction) => {
    console.log('api hit successfully2')
    next()
  },
  authController.userLoginController
)

export const authRouter = router