import React from "react";
import styles from "./styles.module.scss"

type Props = {
  images: {
    readonly id: number,
    src: string
  }[]
}

const ProfileTourInnerGallery: React.FC<Props> = ({images}) => {

  return (
    <div className={styles.tourGallery}>
      <h4>Галерея изображении</h4>
      <div className={styles.tourGalleryImages}>
        {images.map((image, index) => <img className={styles.tourGalleryImagesItem} src={image.src} alt="#"/>)}
      </div>
    </div>
  )
}

export default ProfileTourInnerGallery
