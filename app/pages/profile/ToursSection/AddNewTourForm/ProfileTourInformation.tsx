import React from "react";
import FormControl from "../../../../components/Form/FormControl";
import FormLabel from "../../../../components/Form/FormLabel";
import Input from "../../../../components/Form/Input";
import TextArea from "../../../../components/Form/TextArea";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import {IAddNewTour} from "../../../../constants/interfaces";
import FormErrorMessage from "../../../../components/Form/FormErrorMessage";


type Props = {
  register: UseFormRegister<IAddNewTour>,
  language: "kz" | "ru" | "en",
  errors: FieldErrors<IAddNewTour>
}

const ProfileTourInformation: React.FC<Props> = ({register, language, errors}) => {

  return (
    <>
      <FormControl>
        <FormLabel>Название маршрута</FormLabel>
        <Input register={{...register(`locales.${language}.name`)}} placeholder="Название маршрута"/>
        <FormErrorMessage>{errors.locales && errors.locales[language]?.name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Описание маршрута</FormLabel>
        <TextArea register={{...register(`locales.${language}.route_description`)}} placeholder="Описание маршрута"/>
        <FormErrorMessage>{errors.locales && errors.locales[language]?.route_description?.message}</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Дополнительная информация</FormLabel>
        <TextArea register={{...register(`locales.${language}.additional_information`)}} placeholder="Дополнительная информация"/>
        <FormErrorMessage>{errors.locales && errors.locales[language]?.additional_information?.message}</FormErrorMessage>
      </FormControl>
    </>
  )
}

export default ProfileTourInformation
