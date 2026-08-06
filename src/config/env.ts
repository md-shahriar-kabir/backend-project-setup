import dotenv from 'dotenv'
import { validateEnv } from './env.validate.js'


dotenv.config()

const envVariables = validateEnv()

const env = {
  PORT: envVariables.PORT,
  nodeEnv: envVariables.NODE_ENV,
}

export default env