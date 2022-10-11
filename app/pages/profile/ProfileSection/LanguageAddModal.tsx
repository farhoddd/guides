import React, {useEffect} from "react";
import Modal from "../../../components/Modal";
import Button from "../../../components/Form/Button/Button";
import styles from "./styles.module.scss"
import {useForm} from "react-hook-form";
import {IAddNewLanguage} from "../../../constants/interfaces";
import InputSelect from "../../../components/Form/Select";
import FormErrorMessage from "../../../components/Form/FormErrorMessage";
import FormControl from "../../../components/Form/FormControl";
import Heading from "../../../components/Heading";
import FileInput from "../../../components/Form/FileInput";
import {yupResolver} from "@hookform/resolvers/yup";
import {UserLanguageAddSchema} from "../../../constants/validation";
import {Language} from "../../../types/types";

type Props = {
  isShow: boolean,
  handleClose: () => void,
  languages: Language[],
  updateLanguagesList: (data: IAddNewLanguage) => void,
  addedLanguages: IAddNewLanguage[]
}

const LanguageAddModal: React.FC<Props> = ({isShow, handleClose, languages, updateLanguagesList, addedLanguages}) => {
  const {formState, register, handleSubmit, control, reset, getValues} = useForm<IAddNewLanguage>({
    mode: 'onSubmit',
    resolver: yupResolver(UserLanguageAddSchema)
  })
  const {errors, isSubmitting} = formState

  const onSubmit = (data: IAddNewLanguage) => {
    updateLanguagesList({id: data.id, certificate: data.certificate instanceof FileList ? data.certificate[0] : null})
  }

  useEffect(() => {
    if(!isShow) reset()
  }, [isShow])

  const getNotSubmittedLanguagesBefore = () => {
    let options = []
    options = languages.filter((language) => {
      return addedLanguages.filter((addedLanguage) => addedLanguage.id === language.id).length <= 0
    })
    return options
  }
  console.log(getValues())
  return <Modal
    isShow={isShow}
    handleClose={handleClose}>
    <div className={styles.modal}>
      <Heading className={styles.modalHeading}>Добавить язык</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className="form__block--line">
          <InputSelect
            backgroundColor="#FAFAFA"
            border="1px solid #f4f4f4"
            control={control}
            options={getNotSubmittedLanguagesBefore()}
            placeholder="Выберите язык"
            register={{...register('id')}}/>
          <FormErrorMessage>{errors.id?.message}</FormErrorMessage>
        </FormControl>
        <FormControl className="form__block--line">
          <FileInput
            className={styles.modalInput}
            placeholder="Загрузите сертификат (.pdf, .png, .jpg)"
            register={{...register('certificate')}}/>
          <FormErrorMessage>{errors.certificate?.message}</FormErrorMessage>
        </FormControl>
        <div className={styles.modalControls}>
          <Button onClick={handleClose}>
            Отмена
          </Button>
          <Button type="submit">
            Добавить
          </Button>
        </div>
      </form>
    </div>
  </Modal>
}

export default LanguageAddModal
