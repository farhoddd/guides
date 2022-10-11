import React from "react";
import styles from "./styles.module.scss"
import classNames from "classnames";

type Props = {
  isActive?: boolean
}

const BadgeShowModalFacilityItem: React.FC<Props> = ({children, isActive}) => {

  return <div className={classNames(styles.facility, isActive && styles.facilityActive)}>{children}</div>
}

export default BadgeShowModalFacilityItem
