import React, {forwardRef, useState} from "react";
import DatePicker from "react-datepicker";
import styles from "./styles.module.scss"
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../../../icons/CalendarIcon";
import FormLabel from "../../../components/Form/FormLabel";
import Select from "react-select";

type Props = {
  requestsCount: number
}

// @ts-ignore
const CustomDateInput = forwardRef(({value, onClick}, ref) => {
  return (
    // @ts-ignore
    <button ref={ref}
            onClick={onClick}
            className={styles.sortDate}
    >
      {value ? value : "Выберите дату"}
      <CalendarIcon/>
    </button>
  )
})

const ProfileRequestsSortBlock: React.FC<Props> = ({requestsCount}) => {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleChange = (date: any) => {
    setSelectedDate(date)
  }

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "465px",
      border: "1px solid #0E1839",
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "12px 20px"
    }),
    input: (provided: any) => ({
      ...provided,
      margin: 0,
      padding: 0
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      backgroundColor: "none",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "#2F2E41",
    }),
  }

  return (
    <div className={styles.sort}>
      <div className={styles.sortWrapper}>
        <div>
          <FormLabel htmlFor="date">Дата</FormLabel>
          <DatePicker
            selected={selectedDate}
            onChange={handleChange}
            customInput={<CustomDateInput/>}
          />
        </div>
        {/*<div>*/}
        {/*  <FormLabel>Регион</FormLabel>*/}
        {/*  <Select*/}
        {/*    options={[]}*/}
        {/*    styles={customStyles}*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
      <div>
        Количество заявок: {requestsCount}
      </div>
    </div>
  );
}

export default ProfileRequestsSortBlock
