interface groupData {
  UUID: string
  name: string
  ownerId: string
}

export default function useGroups() {
  const { requestPost, requestGet } = useApi()
  const { Account } = useAuth()
  const toast = useToast()

  const joinGroup = async (code: string) => {
    const { status, data } = await requestPost({
      version: 1,
      route: 'group/join',
      data: { code }
    })

    if (!status || !data) return false

    if (data.success) {
      toast.add({
        title: 'Groupe rejoint',
        description: `Vous avez rejoint le groupe ${data.data.name}`,
        color: 'success'
      })
      return true
    } else return false
  }

  const getGroups = async () => {
    const { status, data } = await requestGet({
      version: 1,
      route: 'groups/get'
    }, false)
    if (!status || !data) return false
    return data.data as groupData[]
  }

  return {
    joinGroup,
    getGroups
  }
}
