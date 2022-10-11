import React from "react";
import styles from "./styles.module.scss"
import classNames from "classnames";

const EducationItemBadge: React.FC<{isOwned: boolean, className?: string}> = ({isOwned, className}) => {

  return (
    <div className={classNames(styles.educationItemBadge, className, {[styles.educationItemBadgeOwned]: isOwned})}>
      {isOwned ? "В моих курсах" : "Получить доступ"}
    </div>
  )
}

export default EducationItemBadge
