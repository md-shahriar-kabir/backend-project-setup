import app from './app.js'
import env from '../src/config/env.js'

import dotenv from 'dotenv'

dotenv.config()

const PORT = env.PORT

app.listen(PORT, () => {
  console.log('server is running on port 5000')
})