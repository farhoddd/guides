import React from "react";
import styles from "./styles.module.scss"
import UserIcon from "../../../icons/UserIcon";
import Tooltip from "../../../components/Tooltip";
import EditIcon from "../../../icons/EditIcon";
import FacebookIcon from "../../../icons/FacebookIcon";
import InstagramIcon from "../../../icons/InstagramIcon";
import TwitterIcon from "../../../icons/TwitterIcon";
import MapIcon from "../../../icons/MapIcon";
import PhoneIcon from "../../../icons/PhoneIcon";
import MailIcon from "../../../icons/MailIcon";
import {User} from "../../../types/types";
import ProfileInformationImage from "./ProfileInformationImage";
import Button from "../../../components/Form/Button/Button";


type Props = {
  userInfo: User | null,
  showEditSection: () => void,
  openBadgeModal: () => void
}

const ProfileInformation: React.FC<Props> = ({userInfo, showEditSection, openBadgeModal}) => {

  return (
    <div className={styles.informationContent}>
      <div className={styles.informationTop}>
        <div className={styles.informationTopSmall}>
          <ProfileInformationImage userInfo={userInfo} showEditSection={showEditSection} openBadgeModal={() => {}}/>
        </div>
        <div className={styles.informationTopName}>
          <div className={styles.informationTopIcon}>
            <UserIcon/>
          </div>
          {userInfo?.surname} {userInfo?.name}
          <div className={styles.informationTopEditIconSmall} onClick={showEditSection}>
            <Tooltip text="Редактировать">
              <EditIcon/>
            </Tooltip>
          </div>
        </div>
        <div className={styles.informationTopEditIcon} onClick={showEditSection}>
          <Tooltip text="Редактировать">
            <EditIcon/>
          </Tooltip>
        </div>
        <div className={styles.informationTopSocial}>
          <FacebookIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
        </div>
      </div>
      <div className={styles.informationContactInfo}>
        <div className={styles.informationContactInfoItem}>
          <MapIcon/>
          {userInfo?.guide_card?.region_of_service?.name}
        </div>
        <div className={styles.informationContactInfoItem}>
          <PhoneIcon/>
          {userInfo?.phone}
        </div>
        <div className={styles.informationContactInfoItem}>
          <MailIcon/>
          {userInfo?.email}
        </div>
      </div>
      <Button className={styles.informationBadgeSmall} onClick={openBadgeModal}>
        Персональный бейджик
      </Button>
      <div className={styles.informationPersonalInfo}>
        <table>
          <tbody>
          <tr>
            <td className={styles.informationPersonalInfoHead}>Уровень:</td>
            <td>{userInfo?.guide_card?.activity?.name ?? "Не указано"}</td>
          </tr>
          <tr>
            <td className={styles.informationPersonalInfoHead}>Номер уведомления:</td>
            <td>{userInfo?.guide_card?.number_of_notification ?? "Не указано"}</td>
          </tr>
          <tr>
            <td className={styles.informationPersonalInfoHead}>Рейтинг:</td>
            <td>{userInfo?.guide_card?.rating ?? "Не указано"}</td>
          </tr>
          <tr>
            <td className={styles.informationPersonalInfoHead}>Допуск:</td>
            <td>{userInfo?.guide_card?.facilities.map((facility) => `${facility.name}`) ?? "Не указано"}</td>
          </tr>
          <tr>
            <td className={styles.informationPersonalInfoHead}>Языки:</td>
            <td>{userInfo?.guide_card?.languages.map((language) => `${language.name}`) ?? 'Не выбрано'}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProfileInformation
