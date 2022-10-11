import React from "react";
import styles from "./styles.module.scss"
import classNames from "classnames";

const EducationBanner: React.FC = () => {

  return (

    <div className={classNames("level__banner", styles.educationBanner)}>
      <div className={styles.educationBannerLeft}>
        <div className={styles.educationBannerTitle}>тестирование на знания по курсу обучения</div>
        <div className={styles.educationBannerSubtitle}>На данный момент прохождение тестирования для вас не доступно.
        </div>
        <div className={styles.educationBannerDescription}>
          В каталоге 17 курсов
        </div>
      </div>
      <div className={styles.educationBannerRight}>
        <img src="/img/education/education_banner.png"/>
      </div>
    </div>
  )
}

export default EducationBanner
