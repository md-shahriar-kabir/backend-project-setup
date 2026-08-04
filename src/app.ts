import express, { type Application, type NextFunction, type Request, type Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { globalErrorHandler } from './middlewares/globalErrorHandler.js'
import router from './router/routes.js'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(router)

app.get('/', (req, res) => {
  console.log('server is running!')
})

app.use(globalErrorHandler)

export default app