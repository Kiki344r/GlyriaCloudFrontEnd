const runtimeConfig = useRuntimeConfig()
const apiUrl = runtimeConfig.public.api_url
const toast = useToast()

interface response {
  success: boolean
  message?: string
  data?: any
}

interface request {
  version: number
  route: string
  data?: any
}

interface requestGet {
  version: number
  route: string
  options?: Record<string, string>
}

const requestPost = async (data: request) => {
  try {
    const res = await $fetch(`${apiUrl}/v${data.version}/${data.route}`, {
      method: 'post',
      credentials: 'include',
      body: data.data
    }) as response
    return {
      status: true,
      data: res
    }
  } catch (e: any) {
    if (e?.data?.message) {
      toast.add({ title: 'Erreur', description: e.data.message, color: 'error' })
      return {
        status: false,
        message: e.data.message
      }
    } else {
      toast.add({ title: 'Erreur', description: 'Impossible de contacter l\'API de Glyria Cloud.', color: 'error' })
      return {
        status: false,
        message: e
      }
    }
  }
}

const requestDelete = async (data: request) => {
  try {
    const res = await $fetch(`${apiUrl}/v${data.version}/${data.route}`, {
      method: 'delete',
      credentials: 'include',
      body: data.data
    }) as response

    return {
      status: true,
      data: res
    }
  } catch (e: any) {
    if (e?.data?.message) {
      toast.add({ title: 'Erreur', description: e.data.message, color: 'error' })
      return {
        status: false,
        message: e.data.message
      }
    } else {
      toast.add({ title: 'Erreur', description: 'Impossible de contacter l\'API de Glyria Cloud.', color: 'error' })
      return {
        status: false,
        message: e
      }
    }
  }
}

const requestPut = async (data: request) => {
  try {
    const res = await $fetch(`${apiUrl}/v${data.version}/${data.route}`, {
      method: 'put',
      credentials: 'include',
      body: data.data
    }) as response

    return {
      status: true,
      data: res
    }
  } catch (e: any) {
    if (e?.data?.message) {
      toast.add({ title: 'Erreur', description: e.data.message, color: 'error' })
      return {
        status: false,
        message: e.data.message
      }
    } else {
      toast.add({ title: 'Erreur', description: 'Impossible de contacter l\'API de Glyria Cloud.', color: 'error' })
      return {
        status: false,
        message: e
      }
    }
  }
}

const requestPatch = async (data: request) => {
  try {
    const res = await $fetch(`${apiUrl}/v${data.version}/${data.route}`, {
      method: 'patch',
      credentials: 'include',
      body: data.data
    }) as response

    return {
      status: true,
      data: res
    }
  } catch (e: any) {
    if (e?.data?.message) {
      toast.add({ title: 'Erreur', description: e.data.message, color: 'error' })
      return {
        status: false,
        message: e.data.message
      }
    } else {
      toast.add({ title: 'Erreur', description: 'Impossible de contacter l\'API de Glyria Cloud.', color: 'error' })
      return {
        status: false,
        message: e
      }
    }
  }
}

const requestGet = async (data: requestGet) => {
  try {
    const res = await $fetch(
      `${apiUrl}/v${data.version}/${data.route}?${new URLSearchParams(data.options)}`,
      {
        method: 'get',
        credentials: 'include'
      }
    ) as response

    return {
      status: true,
      data: res
    }
  } catch (e: any) {
    if (e?.data?.message) {
      toast.add({ title: 'Erreur', description: e.data.message, color: 'error' })
      return {
        status: false,
        message: e.data.message
      }
    } else {
      toast.add({ title: 'Erreur', description: 'Impossible de contacter l\'API de Glyria Cloud.', color: 'error' })
      return {
        status: false,
        message: e
      }
    }
  }
}

export default function () {
  return {
    requestPost,
    requestDelete,
    requestPut,
    requestPatch,
    requestGet
  }
}
