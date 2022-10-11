import http from "../utils/http";
import {LocalStorageHandler} from "../utils/localStorageHandler";
import {IBookGuide} from "../constants/interfaces";

const getGuideList = (perPage: number = 10) => {
  return http.get(`guides?per_page=${perPage}`)
}

const getGuideInfo = (id: number | string) => {
  return http.get(`guides/${id}`)
}

const getGuideReviews = (id: number | string) => {
  return http.get(`reviews?filter[guide_card_id]=${id}`)
}

const paginate = (link: string | null | undefined, perPage: number) => {
  return http.get(`${link}` ?? 'guides')
}

const searchByName = (link: string | null | undefined, keyword: string) => {
  return http.get(`${link}?filter[snp]=${keyword}*`)
}

const sortByLetter = (link: string | null | undefined, letter: string) => {
  return http.get(`${link}?filter[snp]=${letter}*&sortBy[surname]=asc`)
}

const getGuideTourList = (guideId: number | string) => {
  return http.get(`routes?filter[guide_card_id]=${guideId}`)
}

const getGuideBookings = (guideId: number | string) => {
  return http.get(`bookings?filter[guide_card_id]=${guideId}`)
}

const addNewTour = (data: any) => {
  return http.post(`user/routes`, data, {headers: {'Authorization': `Bearer ${LocalStorageHandler.getUserToken()}`}})
}

const deleteTour = (routeId: number) => {
  return http.post(`routes/${routeId}`, {_method: 'DELETE'}, {headers: {'Authorization': `Bearer ${LocalStorageHandler.getUserToken()}`}})
}

const getTour = (routeId: number | string) => {
  return http.get(`routes/${routeId}`)
}

const bookGuide = (data: IBookGuide) => {
  return http.post(`bookings`, data)
}

export const GuideService = {
  getGuideList,
  getGuideInfo,
  getGuideTourList,
  getGuideBookings,
  getGuideReviews,
  paginate,
  searchByName,
  sortByLetter,
  addNewTour,
  deleteTour,
  getTour,
  bookGuide
}
