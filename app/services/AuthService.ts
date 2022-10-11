import http from "../utils/http";
import {
  IEgovVerificationModel, ISignInUserDataModel,
  ISignUpUserDataModel
} from "../constants/interfaces";
import {LocalStorageHandler} from "../utils/localStorageHandler";

const getDataFromEgov = (data: IEgovVerificationModel) => {
  return http.post('registration-pki', data)
}

const signUpUserData = (data: ISignUpUserDataModel) => {
  return http.post('registration', data)
}

const signInUser = (data: ISignInUserDataModel) => {
  return http.post('login', data)
}

const getCurrentUser = (token?: string) => {
  return http.get('user', {headers: {"Authorization": `Bearer ${LocalStorageHandler.getUserToken()}`}})
}

const getActivityList = () => {
  return http.get('activities')
}

const getRegionList = () => {
  return http.get('regions')
}

const getFacilityList = () => {
  return http.get('facilities')
}

const getLanguagesList = () => {
  return http.get('languages')
}

const getTourCategoryList = () => {
  return http.get('route-categories')
}

export const AuthService = {
  getDataFromEgov,
  signUpUserData,
  signInUser,
  getActivityList,
  getRegionList,
  getFacilityList,
  getLanguagesList,
  getCurrentUser,
  getTourCategoryList
}
