import React from "react";
import FormLabel from "../../../components/Form/FormLabel";
import Select from "react-select";
import styles from "./styles.module.scss"
import Button from "../../../components/Form/Button/Button";
import {UserTour} from "../../../types/types";

type Props = {
  tours: UserTour[],
  openAddNewTourForm: () => void
}

const ProfileToursSortBlock: React.FC<Props> = ({tours, openAddNewTourForm}) => {

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
      <div className={styles.sortFilter}>
        <div>
          <FormLabel>Регион</FormLabel>
          <Select
            options={[]}
            styles={customStyles}
          />
        </div>
        <div>
          <FormLabel>Маршрут</FormLabel>
          <Select
            options={[]}
            styles={customStyles}
          />
        </div>
      </div>
      <Button className={styles.sortAdd} onClick={openAddNewTourForm}>
        Добавить маршрут
      </Button>
    </div>
  )
}

export default ProfileToursSortBlock
