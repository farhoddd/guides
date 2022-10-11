export class LocalStorageHandler {
  public static getUserToken = () => {
    const token = localStorage.getItem('Guides.KazTravel.AuthToken')
    return token ?? null
  }

  public static setUserToken = (token: string) => {
    localStorage.setItem('Guides.KazTravel.AuthToken', token)
  }

  public static clearUserToken = () => {
    localStorage.removeItem('Guides.KazTravel.AuthToken')
  }
}

