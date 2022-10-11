import React, {useEffect, useState} from "react";
import {AuthService} from "../services/AuthService";
import {useLoadingContext} from "../context/loading";

const useFacilities = () => {
  const [facilities, setFacilities] = useState([])
  const {isLoading, setIsLoading} = useLoadingContext()


  useEffect(() => {
    setIsLoading(true)
    AuthService
      .getFacilityList()
      .then(response => setFacilities(response.data.data))
      .catch(err => console.log(err.response))
      .finally(() => setIsLoading(false))
  }, []);

  return [facilities]
}

export default useFacilities
