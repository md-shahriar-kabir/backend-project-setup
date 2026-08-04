const userLogin = async (email: string) => {
  const user = {
    email: 'akm@zakaria.com',
  }

  if (!user) throw new Error('user does not exist!')

  if (user.email !== email) throw new Error('user not registered yet!')

  return user.email
}


export const authService = {
  userLogin,
}