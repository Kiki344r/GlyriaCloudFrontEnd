import { useAccountStore } from '~/stores/account'

export default function useAuth() {
  const router = useRouter()
  const { requestPost, requestGet } = useApi()
  const toast = useToast()
  const store = useAccountStore()
  const { account } = storeToRefs(store)

  const verifyToken = async (redirectIfExpired: boolean = false, enableToast: boolean = true) => {
    const { status, data } = await requestGet({
      version: 1,
      route: 'auth/me'
    }, enableToast)
    console.log('Verify token, status: ', status, ', data: ', data, '')
    if (!status || !data) {
      localStorage.removeItem('userData')
      return false
    }

    if (!data.success) {
      toast.add({
        title: 'Erreur',
        description: data?.message,
        color: 'error'
      })
      localStorage.removeItem('userData')
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

  const LogOut = async () => {
    const { status } = await requestPost({
      version: 1,
      route: 'auth/logout'
    })
    if (!status) {
      localStorage.removeItem('userData')
      return
    }
    localStorage.removeItem('userData')
    await Account().update()
    toast.add({
      title: 'Déconnexion réussie',
      color: 'success'
    })
    if (window.location.pathname.startsWith('/dashboard')) router.push('/')
  }

  const ForgotPassword = async (data: { email: string }) => {
    const { status, data: res } = await requestPost({
      version: 1,
      route: 'auth/forgot-password',
      data
    })
    console.log('Forgot password, status: ', status, ', data: ', res, '')
    if (!status || !res) return false
    if (res.success) {
      toast.add({
        title: 'Mot de passe oublié',
        description: 'Un lien de renitialisation de mot de passe a été envoyé à l\'adresse mail si un compte existe avec cette adresse.'
      })
      return true
    } else {
      return false
    }
  }

  const Account = () => {
    return {
      cache: function () {
        const userData = localStorage.getItem('userData')
        if (!userData) return null
        return JSON.parse(userData) as accountData
      },
      fetch: async () => {
        await verifyToken(false, false)
        const userData = localStorage.getItem('userData')
        if (!userData) return null
        return JSON.parse(userData) as accountData
      },
      isLoggedIn: async () => {
        return await verifyToken(false, false)
      },
      update: async () => {
        const store = useAccountStore()
        await store.update()
        return true
      },
      ref: () => {
        return account
      }
    }
  }

  return {
    verifyToken,
    Login,
    Register,
    LogOut,
    ForgotPassword,
    Account
  }
}
