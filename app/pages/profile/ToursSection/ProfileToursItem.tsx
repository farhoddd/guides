import React from "react";
import styles from "./styles.module.scss"
import {UserTour} from "../../../types/types";
import MapIcon from "../../../icons/MapIcon";
import {useTranslation} from "next-i18next";
import Link from "next/link";
import {Routes} from "../../../constants/routes";

type Props = {
  tour: UserTour,
  openDeleteModalWindow: (tourId: number) => void
}

const ProfileToursItem: React.FC<Props> = ({tour, openDeleteModalWindow}) => {
  const {i18n: {language}} = useTranslation()

  const getTourNameAccordingToLocale = () => {
    return tour.locales.find(tourName => tourName.locale === language)?.name
  }

  const showDeleteModalWindow = () => {
    openDeleteModalWindow(tour.id)
  }

  return (
    <div className={styles.toursItem}>
      <Link href={`${Routes.profileTour}${tour.id}`}>
        <a>
          <div className={styles.toursItemCard}>
            <img src={tour.image} alt=""/>
            <div className={styles.toursItemCardContent}>
              <div onClick={showDeleteModalWindow} className={styles.toursItemCardContentDelete}>
                <div className={styles.toursItemCardContentDeleteIcon}/>
              </div>
              <div className={styles.toursItemCardContentRating}>
                {getTourNameAccordingToLocale()}
              </div>
              <div className={styles.toursItemCardContentReviews}>
                <MapIcon/> {tour.region.name}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ProfileToursItem
