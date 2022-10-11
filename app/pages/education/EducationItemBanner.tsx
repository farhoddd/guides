import React from "react";
import styles from "./styles.module.scss"
import classNames from "classnames";
import {EducationModule} from "../../types/types";
import EducationItemBadge from "./EducationItemBadge";

type Props = Pick<EducationModule, 'name' | 'isOwned' | 'imagePath'>

const EducationItemBanner: React.FC<Props> = ({name, isOwned, imagePath}) => {

  return (
    <div className={classNames(styles.educationModuleBanner)}>
      <img src={imagePath} alt=""/>
      <div className={styles.educationModuleBannerContent}>
        <div className={styles.educationModuleBannerContentPrice}>Бесплатно</div>
        <div className={styles.educationModuleBannerContentName}>{name}</div>
        <EducationItemBadge className={styles.educationModuleBannerContentBadge} isOwned={isOwned}/>
      </div>
    </div>
  )
}

export default EducationItemBanner
