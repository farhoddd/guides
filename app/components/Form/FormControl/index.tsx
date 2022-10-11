import React from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode,
  className?: string
}

const FormControl: React.FC<Props> = ({children, className}) => {

  return (
    <div className={classNames("form__block--input", className)}>
      {children}
    </div>
  )
}

export default FormControl
