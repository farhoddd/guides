import React from "react";
import Modal from "../../../components/Modal";
import {User} from "../../../types/types";
import styles from "./styles.module.scss"
import ImageUploadIcon from "../../../icons/ImageUploadIcon";
import BadgeShowModalFacilityItem from "./BadgeShowModalFacilityItem";
import Button from "../../../components/Form/Button/Button";

type Props = {
  isShow: boolean,
  handleClose: () => void,
  userInfo: User
}

const BadgeShowModal: React.FC<Props> = ({isShow, handleClose, userInfo}) => {

  const isLanguageHandledByGuide = (language: "Казахский" | "Русский" | "Английский") => {
    return userInfo.guide_card?.languages?.find(guideLanguage => guideLanguage.name === language)
  }

  return (
    <Modal isShow={isShow} handleClose={handleClose}>
      <div className={styles.badge}>
        <div className={styles.badgeTitle}>Official Guide</div>
        <div className={styles.badgeImage}>
          {!userInfo?.image && <ImageUploadIcon/>}
          {userInfo?.image && <img src={userInfo?.image} alt=""/>}
        </div>
        <div className={styles.badgeFullName}>{userInfo?.surname} {userInfo?.name}</div>
        <div className={styles.badgeNotificationNumber}>Номер уведомления: {userInfo?.guide_card?.number_of_notification ?? "-"}</div>
        <div className={styles.badgeRank}>{userInfo?.guide_card?.activity?.name}</div>
        <div className={styles.badgeLanguages}>
          {isLanguageHandledByGuide("Казахский") && <img src="/img/profile/kz_flag.png" alt=""/>}
          {isLanguageHandledByGuide("Русский") && <img src="/img/profile/ru_flag.png" alt=""/>}
          {isLanguageHandledByGuide("Английский") && <img src="/img/profile/uk_flag.png" alt=""/>}
        </div>
        <div className={styles.badgeBottomBlock}>
          <div className={styles.badgeBottomBlockFacilities}>
            <BadgeShowModalFacilityItem>Музей</BadgeShowModalFacilityItem>
            <BadgeShowModalFacilityItem>Культурные объекты</BadgeShowModalFacilityItem>
            <BadgeShowModalFacilityItem>Исторические объекты</BadgeShowModalFacilityItem>
            <BadgeShowModalFacilityItem>Выставки</BadgeShowModalFacilityItem>
          </div>
          <div className={styles.badgeBottomBlockQR}>
            <img src={userInfo?.qr} alt=""/>
          </div>
        </div>
        <div className={styles.badgeControls}>
          <Button>Напечатать бейджик (PDF)</Button>
          <Button>Скачать бейджик (PDF)</Button>
        </div>
      </div>
    </Modal>
  )
}

export default BadgeShowModal
