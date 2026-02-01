interface userData {
  firstName: string
  lastName: string
  email: string
  groups: {
    UUID: string
    name: string
    ownerId: string
  }[]
  UUID: string
}

export default function useAuth() {
  const router = useRouter()
  const { requestPost, requestGet } = useApi()
  const toast = useToast()

  const verifyToken = async (redirectIfExpired: boolean = false, enableToast: boolean = true) => {
    const { status, data } = await requestGet({
      version: 1,
      route: 'auth/me'
    }, enableToast)

    if (!status || !data) return false

    if (!data.success) {
      toast.add({
        title: 'Erreur',
        description: data?.message,
        color: 'error'
      })
      localStorage.removeItem('userData')
      await cookieStore.delete('token')
      if (redirectIfExpired) return router.push('/login')
      return false
    }

    localStorage.setItem('userData', JSON.stringify(data.data))
    return true
  }

  const Login = async (data: any) => {
    const { status, data: res } = await requestPost({
      version: 1,
      route: 'auth/login',
      data
    })

    if (!status || !res) return false

    if (res.success) {
      localStorage.setItem('userData', JSON.stringify(res.data))

      toast.add({
        title: 'Connexion réussie',
        description: `Bienvenue ${res?.data?.firstName} !`,
        color: 'success'
      })

      return router.push('/')
    } else {
      toast.add({
        title: 'Erreur',
        description: res?.message,
        color: 'error'
      })
      return false
    }
  }

  const Register = async (data: any) => {
    const { status, data: res } = await requestPost({
      version: 1,
      route: 'auth/register',
      data
    })

    if (!status || !res) return false

    if (res.success) {
      toast.add({
        title: 'Compte créer avec succès',
        description: `Vous pouvez vous connecter avec vos identifiants !`,
        color: 'success'
      })

      return router.push('/')
    } else {
      toast.add({
        title: 'Erreur',
        description: res?.message,
        color: 'error'
      })
      return false
    }
  }

  const Account = () => {
    return {
      cache: function () {
        const userData = localStorage.getItem('userData')
        if (!userData) return null
        return JSON.parse(userData) as userData
      },
      fetch: async () => {
        await verifyToken()
        const userData = localStorage.getItem('userData')
        if (!userData) return null
        return JSON.parse(userData) as userData
      },
      isLoggedIn: async () => {
        return await verifyToken(false, false)
      }
    }
  }

  return {
    verifyToken,
    Login,
    Register,
    Account
  }
}
