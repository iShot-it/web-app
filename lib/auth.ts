import Cookies from 'js-cookie'

export const setAuthCookie = (token: string) => {
  Cookies.set('auth_token', token, {
    expires: 30, // 30 days
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  })
}

export const removeAuthCookie = () => {
  Cookies.remove('auth_token')
}