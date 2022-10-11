import React, {useEffect, useState} from "react";
import {AuthService} from "../services/AuthService";
import {Language} from "../types/types";
import {useLoadingContext} from "../context/loading";

const useLanguages = () => {
  const [languages, setLanguages] = useState<Language[]>([])
  const {isLoading, setIsLoading} = useLoadingContext()


  useEffect(() => {
    setIsLoading(true)
    AuthService
      .getLanguagesList()
      .then(response => setLanguages(response.data.data))
      .catch(err => console.log(err.response))
      .finally(() => setIsLoading(false))
  }, []);

  return {languages, setLanguages}
}

export default useLanguages
