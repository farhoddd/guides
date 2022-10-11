import React from "react";
import {ChangeHandler} from "react-hook-form";
import Select from "react-select";
import "./styles.module.scss"
import {Controller} from "react-hook-form"

type Props = {
  register?: {
    onChange: ChangeHandler,
    onBlur: ChangeHandler,
    ref: React.Ref<any>,
    name: string
  },
  options: any[],
  control: any,
  backgroundColor?: string,
  border?: string,
  placeholder?: string
}

const InputSelect: React.FC<Props> = ({register, options, control, backgroundColor, border, placeholder}) => {

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "100%",
      border: border || "1px solid #0E1839",
      backgroundColor: backgroundColor || "#fff",
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "10px 15px"
    }),
    input: (provided: any) => ({
      ...provided,
      margin: 0,
      padding: 0,
      fontSize: "14px"
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
    <Controller
      name={register?.name || ""}
      control={control}
      render={({field: {value, onChange, onBlur, ref}}) => {
        return (
          <Select
            styles={customStyles}
            ref={ref}
            closeMenuOnScroll={true}
            value={options.filter(item => value === item.id)}
            isClearable
            isSearchable
            onChange={(item) => onChange(item?.id)}
            getOptionValue={(option) => `${option['id']}`}
            getOptionLabel={(label) => `${label['name']}`}
            placeholder={placeholder}
            noOptionsMessage={() => "Совпадении не найдено"}
            options={options}/>
        )
      }}/>
  )
}

export default InputSelect
