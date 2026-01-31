const router = useRouter()
const { requestPost } = useApi()
const toast = useToast()

const Login = async (data: any) => {
  const { status, data: res } = await requestPost({
    version: 1,
    route: 'auth/login',
    data: data
  })

  if (!status || !res) return false

  console.log(res)

  if (res.success) {
    localStorage.setItem('useData', res.data)

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
    data: data
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

export default function () {
  return {
    Login,
    Register
  }
}
