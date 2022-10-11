import React from "react";
import {ProfilePageTab} from "../../types/types";
import styles from "./styles.module.scss"
import classNames from "classnames";
import Link from "next/link"

const ProfilePageTab: React.FC<ProfilePageTab & {active: boolean}> = ({iconPath, title, active, path}) => {

  return (
    <Link href={path}>
      <a>
        <div className={classNames(styles.tab, active && styles.tabActive)}>
          <img src={iconPath} alt="#"/>
          {title}
        </div>
      </a>
    </Link>
  )
}

export default ProfilePageTab
