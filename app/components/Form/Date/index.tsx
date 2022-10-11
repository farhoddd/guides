import React, {forwardRef, useState} from "react";
import CalendarIcon from "../../../icons/CalendarIcon";
import DatePicker from "react-datepicker";
import styles from "./styles.module.scss"
import "react-datepicker/dist/react-datepicker.css";
import {ChangeHandler} from "react-hook-form";
import {Controller} from "react-hook-form"

type Props = {
  register?: {
    onChange: ChangeHandler,
    onBlur: ChangeHandler,
    ref: React.Ref<any>,
    name: string,
  },
  control: any,
}


// @ts-ignore eslint-disable-next-line react/display-name
const CustomDateInput = forwardRef(({value, onClick}, ref) => {

  return (
    <div className={styles.input}>
      {/*@ts-ignore*/}
      <input ref={ref}
        type="text"
        readOnly
        onClick={onClick}
        className={styles.inputLabel}
        placeholder={value || "Выберите дату"}
      />
      <div className={styles.inputIcon}>
        <CalendarIcon/>
      </div>
    </div>
  )
})

const InputDate: React.FC<Props> = ({register, control}) => {

  return <div>
    <Controller
      name={register?.name || ""}
      control={control}
      render={({field: {value, onChange, onBlur, ref}}) => {
        return (
          <DatePicker
            selected={value}
            onChange={onChange}
            customInput={<CustomDateInput/>}
          />
        )
      }}
    />
  </div>
}

export default InputDate
