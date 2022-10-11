import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {Routes} from "../constants/routes";
import Preloader from "../components/Preloader/Preloader";
import Wrapper from "../components/Wrapper";
import {useAuthContext} from "../context/auth";
import {useLoadingContext} from "../context/loading";

const withRequireGuest: any = (Component: any) => {

  const PublicComponent = () => {
    const {userInfo, updateUserInfo} = useAuthContext()
    const {isLoading, setIsLoading} = useLoadingContext()
    const router = useRouter()

    useEffect(() => {
      if(!isLoading && userInfo) router.push(Routes.profile)
    }, [userInfo, isLoading])

    return !!userInfo ?
      <Wrapper><Preloader/></Wrapper> :
      <Component userInfo={userInfo}/>
  };

  return PublicComponent;
}

export default withRequireGuest
