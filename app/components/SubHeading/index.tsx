import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss"

type Props = {
  children: React.ReactNode,
  uppercase?: boolean
}

const SubHeading: React.FC<Props> = ({children, uppercase}) => {

  return (
    <h3 className={classNames(
      styles.subheading,
      uppercase && styles.uppercase
    )}>{children}</h3>
  )
}

export default SubHeading
