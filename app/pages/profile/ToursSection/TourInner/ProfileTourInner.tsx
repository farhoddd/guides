import React from "react";
import {UserTour} from "../../../../types/types";
import styles from "./styles.module.scss"
import Heading from "../../../../components/Heading";
import ProfileTourInnerBaseImage from "./ProfileTourInnerBaseImage";
import ProfileTourInnerGeneralInformation from "./ProfileTourInnerGeneralInformation";
import ProfileTourInnerGallery from "./ProfileTourInnerGallery";
import Link from "next/link";
import {Routes} from "../../../../constants/routes";
import Button from "../../../../components/Form/Button/Button";

type Props = {
  tour: UserTour,
}

const ProfileTourInner: React.FC<Props> = ({tour}) => {
  console.log(tour)
  return (
    <div className={styles.tour}>
      <div className={styles.tourTop}>
        <Heading>Просмотр тура</Heading>
        <Link href={Routes.tours}>
          <a>
            <Button>Список моих туры</Button>
          </a>
        </Link>
      </div>
      <ProfileTourInnerBaseImage
        image={tour.image}
      />
      <ProfileTourInnerGeneralInformation
        locales={tour.locales}
        regionName={tour.region?.name}
        categoryName={tour.category?.name}
      />
      <ProfileTourInnerGallery
        images={tour.images}
      />
    </div>
  )
}


export default ProfileTourInner
