import React, {useEffect, useState} from "react";
import {AuthService} from "../services/AuthService";
import {useLoadingContext} from "../context/loading";

const useActivities = () => {
  const [activities, setActivities] = useState([])
  const {isLoading, setIsLoading} = useLoadingContext()


  useEffect(() => {
    setIsLoading(true)
    AuthService
      .getActivityList()
      .then(response => setActivities(response.data.data))
      .catch(err => console.log(err.response))
      .finally(() => setIsLoading(false))
  }, []);

  return [activities]
}

export default useActivities
