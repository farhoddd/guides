import React from "react";
import styles from "./styles.module.scss"

type Props = {
  image: File,
  removeItemFromGallery: () => void
}

const ProfileTourGalleryImage: React.FC<Props> = ({image, removeItemFromGallery}) => {

  const removeImage = () => {
    removeItemFromGallery()
  }

  return (
    <div className={styles.newTourGalleryItem}>
      <img src={URL.createObjectURL(image)} alt="uploadedImage"/>
      <div className={styles.newTourGalleryItemRemove}>
        <button onClick={removeImage}/>
      </div>
    </div>
  )
}

export default ProfileTourGalleryImage
