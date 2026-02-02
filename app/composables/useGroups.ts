export default function useGroups() {
  const { requestPost, requestGet, requestDelete } = useApi()
  const toast = useToast()

  const { groups } = useGroupsStore()

  const updateGroups = async () => {
    const newGroups = await getGroups()
    if (!newGroups) return false
    groups.length = 0
    groups.push(...newGroups)
    return true
  }

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

  const leaveGroup = async (UUID: string) => {
    const { status, data } = await requestDelete({
      version: 1,
      route: 'group/leave',
      data: { groupId: UUID }
    }, true)
    if (!status || !data) return false
    return data.success
  }

  const getGroups = async () => {
    const { status, data } = await requestGet({
      version: 1,
      route: 'groups/get'
    }, false)
    if (!status || !data) return false
    return data.data as groupData[]
  }

  const getGroupsRef = (): groupData[] => {
    return groups
  }

  return {
    joinGroup,
    leaveGroup,
    getGroups,
    getGroupsRef,
    updateGroups
  }
}
