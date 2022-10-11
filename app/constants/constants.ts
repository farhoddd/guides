import {ProfilePageTab} from "../types/types";

export const ProfileTabs: ProfilePageTab[] = [
  {
    iconPath: '/img/profile/profile_user.svg',
    title: 'Мой профиль',
    path: '/profile'
  },
  {
    iconPath: '/img/profile/profile_mail.svg',
    title: 'Мои заявки',
    path: '/profile/requests'
  },
  {
    iconPath: '/img/profile/profile_route.svg',
    title: 'Мои маршруты',
    path: '/profile/tours'
  },
  {
    iconPath: '/img/profile/profile_rating.svg',
    title: 'Мои отзывы',
    path: '/profile/reviews'
  },
]
