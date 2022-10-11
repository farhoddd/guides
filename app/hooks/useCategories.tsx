import React, {useEffect, useState} from "react";
import {AuthService} from "../services/AuthService";
import {useLoadingContext} from "../context/loading";
import {TourCategory} from "../types/types";

const useCategories = () => {
  const [categories, setCategories] = useState<TourCategory[]>([])
  const {isLoading, setIsLoading} = useLoadingContext()

  useEffect(() => {
    setIsLoading(true)
    AuthService
      .getTourCategoryList()
      .then(response => setCategories(response.data.data))
      .catch(err => console.log(err.response))
      .finally(() => setIsLoading(false))
  }, []);

  return [categories]
}

export default useCategories
