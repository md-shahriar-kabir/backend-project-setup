// globalErrorHandler.ts
import type { Request, Response, NextFunction } from 'express'
import { ApiResponse } from '../utils/ApiResponse.js'

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Something went wrong!'

  // Send errors formatted through ApiResponse
  return ApiResponse.error(res, message, statusCode)
}