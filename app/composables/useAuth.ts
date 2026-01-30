const router = useRouter()

const GithubLogin = () => {
  console.log('Github login')
  return router.push('/auth/github')
}

export default function () {
  return {
    GithubLogin
  }
}
