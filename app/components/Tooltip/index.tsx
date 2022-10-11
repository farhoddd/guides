import React from "react";
import styles from "./styles.module.scss"

type Props = {
  children: React.ReactNode,
  text: string
}

const Tooltip: React.FC<Props> = ({children, text= "Tooltip text"}) => {

  return <span className={styles.tooltip}>
    <small>{text}</small>
    {children}
  </span>
}

export default Tooltip
