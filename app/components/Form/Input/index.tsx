import React, {InputHTMLAttributes} from "react";
import {ChangeHandler} from "react-hook-form";
import classNames from "classnames";
import styles from "./styles.module.scss"
const InputMask = require('react-input-mask')

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string,
  type?: string,
  name?: string,
  register?: {
    onChange: ChangeHandler,
    onBlur: ChangeHandler,
    ref: React.Ref<any>,
    name: string,
  },
  icon?: React.ReactElement
}

const Input: React.FC<Props> = ({
                                  className,
                                  type,
                                  register,
                                  name,
                                  icon,
                                  ...props
                                }) => {

  return (
    <div className={styles.inputGroup}>
      {icon ? icon : null}
      {type !== 'phone' && (
        <input type={type || "text"}
               name={name || register?.name}
               className={classNames(styles.input, className, {[styles.inputIcon]: icon})}
               ref={register?.ref}
               onChange={register?.onChange}
               onBlur={register?.onBlur}
               {...props}
        />
      )}
      {type === "phone" && (
        <InputMask onChange={register?.onChange} onBlur={register?.onBlur} mask="+7 (999) 999 99 99" alwaysShowMask>
          <input
            className={classNames(styles.input, className)}
            name={name || register?.name}
            ref={register?.ref}
            {...props}
          />
        </InputMask>
      )}
    </div>

  )
}

export default Input
