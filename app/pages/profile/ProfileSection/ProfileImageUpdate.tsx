import React, {useRef} from "react";
import styles from "./styles.module.scss"
import ImageUploadIcon from "../../../icons/ImageUploadIcon";

type Props = {
  image: string | undefined | null,
  onImageUpload: (image: File) => void
}

const ProfileImageUpdate: React.FC<Props> = ({image, onImageUpload}) => {
  const imageUploadRef = useRef<HTMLImageElement>(null)

  const onFileUpload = (event: any) => {
    const [...image] = event.target.files
    if(image.length > 0){
      onImageUpload(image[0])
    }
  }

  return <div className={styles.avatarImageAvatar}>
    {!image && <ImageUploadIcon/>}
    {image && <img ref={imageUploadRef} src={image} alt=""/>}
    <div className={styles.avatarImageEdit}>
      <label htmlFor="profile-image-upload">Загрузить новое фото</label>
      <input
        accept="image/*"
        onChange={onFileUpload}
        multiple={false}
        id="profile-image-upload"
        type="file"/>
    </div>
  </div>
}

export default React.memo(ProfileImageUpdate)
