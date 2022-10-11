import React from "react";
import styles from "./styles.module.scss"
import {UserTour} from "../../../types/types";
import ProfileToursItem from "./ProfileToursItem";

type Props = {
  tours: UserTour[],
  openDeleteModalWindow: (tourId: number) => void
}

const ProfileToursList: React.FC<Props> = ({tours, openDeleteModalWindow}) => {

  return (
    <>
      <div className={styles.toursList}>
        {tours.map((tour) => <ProfileToursItem openDeleteModalWindow={openDeleteModalWindow}
                                               tour={tour}
                                               key={tour.id}/>)}
      </div>
      {tours.length == 0 && <div className={styles.toursEmpty}>Вы еще не добавили ни один маршрут!</div>}
    </>
  )
}

export default ProfileToursList
