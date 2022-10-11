import React from "react";
import styles from "./styles.module.scss"
import classNames from "classnames";

type Props = {
  children: React.ReactNode,
  className?: string,
  uppercase?: boolean
}

const Heading: React.FC<Props> = ({children, className, uppercase}) => {

  return (
    <h2 className={classNames(styles.heading, className, uppercase && styles.uppercase)}>{children}</h2>
  )
}

export default Heading
