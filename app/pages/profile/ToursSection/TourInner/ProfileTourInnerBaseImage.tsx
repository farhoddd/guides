import React from "react";
import styles from "./styles.module.scss"

type Props = {
  image: string
}

const ProfileTourInnerBaseImage: React.FC<Props> = ({image}) => {

  return (
    <div className={styles.tourBaseImage}>
      <figure>
        <img src={image} alt="base image"/>
        <figcaption>Титульное изображение</figcaption>
      </figure>
    </div>
  )
}

export default ProfileTourInnerBaseImage
