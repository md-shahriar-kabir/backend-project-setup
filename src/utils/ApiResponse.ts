import type { Response } from 'express'

export class ApiResponse<T = unknown> {
  success: boolean
  statusCode: number
  message: string
  data: T | null

  constructor(statusCode: number, message: string, data: T | null = null) {
    this.statusCode = statusCode
    this.success = statusCode < 400
    this.message = message
    this.data = data
  }

  // Static helper for success responses
  static success<T>(
    res: Response,
    statusCode: number = 200,
    message: string = 'Success',
    data: T | null = null
  ): Response {
    const responsePayload = new ApiResponse(statusCode, message, data)
    return res.status(statusCode).json(responsePayload)
  }

  // Optional: Static helper for error responses
  static error(
    res: Response,
    statusCode: number = 500,
    message: string = 'Internal Server Error',
    data: null = null
  ): Response {
    const responsePayload = new ApiResponse(statusCode, message, data)
    return res.status(statusCode).json(responsePayload)
  }
}