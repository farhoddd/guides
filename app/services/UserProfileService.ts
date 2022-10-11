import {LocalStorageHandler} from "../utils/localStorageHandler";
import http from "../utils/http";


const updateUserData = (id: number | undefined, data: any) => {
  const token = LocalStorageHandler.getUserToken()
  return http.post(`/users/${id}`, data, {
    headers: {
      "Authorization": `Bearer ${token}`,
      'content-type': 'multipart/form-data'
    }})
}

export const UserProfileService = {
  updateUserData
}
