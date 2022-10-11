import React from "react";
import styles from "./styles.module.scss"
import classNames from "classnames";

type Props = {
  title: string,
  onTabChange: () => void,
  active: boolean
}

const ProfileTourChangeLanguageTab: React.FC<Props> = ({title, onTabChange, active}) => {

  return (
    <div className={classNames(styles.newTourFormTab, {[styles.newTourFormTabActive]: active})} onClick={onTabChange}>
      {title}
    </div>
  )
}

export default ProfileTourChangeLanguageTab
