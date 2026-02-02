export {}

declare global {
  interface groupData {
    UUID: string
    name: string
    ownerId: string
    owner: {
      firstName: string
      lastName: string
    }
  }
}
