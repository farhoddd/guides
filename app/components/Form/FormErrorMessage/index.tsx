import React from "react";
import styles from "./styles.module.scss"
import classNames from "classnames";

type FormErrorMessageProps = {
  children?: JSX.Element | React.ReactNode
}

const FormErrorMessage: React.FC<FormErrorMessageProps> = ({children}) => {
  return children ? <small className={classNames(styles.error)}>{children}</small> : null
}

export default FormErrorMessage
