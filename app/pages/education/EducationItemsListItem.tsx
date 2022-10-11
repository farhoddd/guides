import React from "react";
import {EducationModule} from "../../types/types";
import styles from "./styles.module.scss"
import classNames from "classnames";
import Link from "next/link"
import {Routes} from "../../constants/routes";
import EducationItemBadge from "./EducationItemBadge";

type Props = & EducationModule

const EducationItemsListItem: React.FC<Props> = ({id, name, imagePath, isOwned}) => {

  return (
    <Link href={`${Routes.educationItem}/${id}`}>
      <a className={`${styles.educationItem} `}>
        <div className={styles.educationItem}>
          <div className={styles.educationItemImg}>
            <EducationItemBadge isOwned={isOwned}/>
            <img src={imagePath}/>
          </div>
          <div className={styles.educationItemTitle}>
            {name}
          </div>
          <div className={styles.educationItemPrice}>
            Бесплатно
          </div>
        </div>
      </a>
    </Link>
  )
}

export default EducationItemsListItem
