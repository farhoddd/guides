import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss"

type Props = {
  children: React.ReactNode,
  className?: string,
  htmlFor?: string
}

const FormLabel: React.FC<Props> = ({children, className, htmlFor}) => {

  return <label className={classNames(styles.formLabel, className)} htmlFor={htmlFor}>
    {children}
  </label>
}

export default FormLabel
