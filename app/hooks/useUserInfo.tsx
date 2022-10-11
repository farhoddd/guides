import React, {useEffect, useState} from "react";
import {LocalStorageHandler} from "../utils/localStorageHandler";
import {AuthService} from "../services/AuthService";
import {User} from "../types/types";
import {useLoadingContext} from "../context/loading";

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null)
  const {isLoading, setIsLoading} = useLoadingContext()

  const getUserInformationFromBackend = (token: string) => {
    setIsLoading(true)
    AuthService.getCurrentUser(token)
      .then(response => {
        setUserInfo(response.data?.data)
      })
      .catch(() => LocalStorageHandler.clearUserToken())
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    const token = LocalStorageHandler.getUserToken()
    if(token) getUserInformationFromBackend(token)
    else setIsLoading(false)
  }, [])

  return {userInfo, setUserInfo, userDataIsFetching: isLoading}
}

export default useUserInfo
