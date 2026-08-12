import z from 'zod'

const envSchema = z.object({
  PORT: z.string(),
  NODE_ENV: z.string(),
  DATABASE_URL: z.string(),
})

export const validateEnv = () => {
  const parsedEnv = envSchema.safeParse(process.env)

  //   console.log(parsedEnv)

  if (!parsedEnv.success) {
    console.error('Invalid environment variable', parsedEnv.error.flatten().fieldErrors)
    process.exit(1)
  }

  return parsedEnv.data
}