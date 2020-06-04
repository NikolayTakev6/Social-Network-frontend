export default () => {
  const accessToken = window.localStorage.getItem('accessToken')
  const exp = window.localStorage.getItem('exp')

  if (accessToken && accessToken.length > 0 && exp && exp.length > 0) {
    const today = new Date().getTime()
    const expiresAt = parseInt(exp)

    return expiresAt > today
  }

  return false
}
