import type { Request, Response } from 'express'
import { authService } from './auth.service.js'
import { ApiResponse } from '../../utils/ApiResponse.js'
import catchAsync from '../../utils/catchAsync.js'

const userLoginController = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body

  const result = await authService.userLogin(email)


  ApiResponse.success(res, 200, 'user logged in successfully', result)
})
export const authController = {
  userLoginController,
}