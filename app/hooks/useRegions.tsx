import React, {useEffect, useState} from "react";
import {AuthService} from "../services/AuthService";
import {useLoadingContext} from "../context/loading";
import {Region} from "../types/types";

const useRegions = () => {
  const [regions, setRegions] = useState<Region[]>([])
  const {isLoading, setIsLoading} = useLoadingContext()


  useEffect(() => {
    setIsLoading(true)
    AuthService
      .getRegionList()
      .then(response => setRegions(response.data.data))
      .catch(err => console.log(err.response))
      .finally(() => setIsLoading(false))
  }, []);

  return [regions]
}

export default useRegions
