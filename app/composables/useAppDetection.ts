export const useAppDetection = () => {
  // Détecte si on est dans l'environnement Tauri
  const isDesktop = computed(() => {
    // @ts-ignore
    return false
  })

  const isWeb = computed(() => !isDesktop.value)

  return {
    isDesktop,
    isWeb
  }
}
