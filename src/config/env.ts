import dotenv from 'dotenv'
import { validateEnv } from './env.validate.js'


dotenv.config()

const envVariables = validateEnv()

const env = {
  PORT: envVariables.PORT,
}

export default env