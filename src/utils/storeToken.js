export default ({ accessToken, iat, exp }) => {
  window.localStorage.setItem('accessToken', accessToken)
  window.localStorage.setItem('iat', iat * 1000)
  window.localStorage.setItem('exp', exp * 1000)
}
