const loggedIn = [
  'dashboard'
]
const notLoggedIn = [
  'login',
  'register'
]

export default defineNuxtRouteMiddleware(async (to, _) => {
  if (import.meta.server) return

  const URI = to.path.split('/')
  const route = URI[1] || ''
  console.log(URI)

  const { verifyToken, Account } = useAuth()

  if (loggedIn.includes(route)) {
    const res = await verifyToken()
    if (!res) {
      console.log('redirect')
      return navigateTo('/login')
    }
  } else if (notLoggedIn.includes(route)) {
    const { isLoggedIn } = Account()
    const status = await isLoggedIn()
    if (status) return navigateTo('/dashboard')
  } else return
})
