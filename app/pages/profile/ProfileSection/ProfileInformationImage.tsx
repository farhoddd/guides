import React from "react";
import {User} from "../../../types/types";
import ImageUploadIcon from "../../../icons/ImageUploadIcon";
import Button from "../../../components/Form/Button/Button";
import styles from "./styles.module.scss"

type Props = {
  userInfo: User | null,
  showEditSection: () => void,
  openBadgeModal: () => void
}

const ProfileInformationImage: React.FC<Props> = ({userInfo, showEditSection, openBadgeModal}) => {

  return (
    <>
      <div className={styles.informationRightSideImage}>
        {!userInfo?.image && <ImageUploadIcon/>}
        {userInfo?.image && <img src={userInfo?.image} alt=""/>}
        <div className={styles.informationRightSideImageEdit}>
          <button onClick={showEditSection}>Редактировать</button>
        </div>
      </div>
      <div className={styles.informationRightSideEdit}>
        <Button onClick={openBadgeModal}>
          Персональный бейджик
        </Button>
      </div>
    </>
  )
}

export default ProfileInformationImage
