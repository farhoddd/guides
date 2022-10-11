import React, {useEffect} from "react";
import {useRouter} from "next/router";
import Preloader from "../components/Preloader/Preloader";
import Wrapper from "../components/Wrapper";
import {useAuthContext} from "../context/auth";
import {Routes} from "../constants/routes";
import {useLoadingContext} from "../context/loading";

const withRequireAuth: any = (Component: any) => {

  const AuthenticatedComponent = () => {
    const router = useRouter();
    const {userInfo, updateUserInfo} = useAuthContext()
    const {isLoading, setIsLoading} = useLoadingContext()

    useEffect(() => {
      if(!isLoading && !userInfo) router.push(Routes.login)
    }, [userInfo, isLoading])

    return !!userInfo ?
      <Component userInfo={userInfo}/>
      : <Wrapper><Preloader/></Wrapper>
  };

  return AuthenticatedComponent;
}

export default withRequireAuth
