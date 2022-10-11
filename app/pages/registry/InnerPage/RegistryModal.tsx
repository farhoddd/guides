import React from "react";
import Modal from "../../../components/Modal";
import styles from "./styles.module.scss"
import Heading from "../../../components/Heading";
import {useForm} from "react-hook-form";
import {IBookGuide} from "../../../constants/interfaces";
import {GuideBookSchema} from "../../../constants/validation";
import FormControl from "../../../components/Form/FormControl";
import Input from "../../../components/Form/Input";
import FormErrorMessage from "../../../components/Form/FormErrorMessage";
import InputSelect from "../../../components/Form/Select";
import Button from "../../../components/Form/Button/Button";
import InputDate from "../../../components/Form/Date";
import {yupResolver} from "@hookform/resolvers/yup";
import {UserTour} from "../../../types/types";
import {GuideService} from "../../../services/GuideService";
import {displayErrorMessage, displaySuccessMessage} from "../../../utils/helpers";

type Props = {
  isShow: boolean,
  closeModal: () => void,
  guideTours: UserTour[],
  guideId: number
}

const RegistryModal: React.FC<Props> = ({isShow, closeModal, guideTours, guideId}) => {
  const {formState, register, handleSubmit, control, reset, getValues} = useForm<IBookGuide>({
    mode: 'onSubmit',
    resolver: yupResolver(GuideBookSchema)
  })
  const {errors, isSubmitting} = formState

  const onSubmit = (data: IBookGuide) => {
    GuideService.bookGuide({
      ...data,
      guide_card_id: guideId,
      date: new Date(data.date).toISOString().split('T')[0]
    })
      .then(response => {
        displaySuccessMessage("Ваш запрос был отправлен в систему!")
        closeModal()
      })
      .catch(err => {
        console.log(err.response)
        displayErrorMessage("Произошла ошибка при бронировании гида!")
      })
  }

  return (
    <Modal isShow={isShow} handleClose={closeModal}>
      <div className={styles.registryModal}>
        <Heading>Бронирование гида</Heading>
        <form className={styles.registryModalForm} onSubmit={handleSubmit(onSubmit)}>
          <FormControl className="form__block--line">
            <Input className={styles.registryModalFormElement} placeholder="Ваше ФИО"
                   register={{...register('full_name')}}/>
            <FormErrorMessage>{errors.full_name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl className="form__block--line">
            <InputDate control={control} register={{...register('date')}}/>
            <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
          </FormControl>
          <FormControl className="form__block--line">
            <Input className={styles.registryModalFormElement} placeholder="Номер телефона" type="phone"
                   register={{...register('phone')}}/>
            <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
          </FormControl>
          <FormControl className="form__block--line">
            <InputSelect
              backgroundColor="#FAFAFA"
              border="1px solid #f4f4f4"
              control={control}
              options={guideTours}
              placeholder="Выберите тур"
              register={{...register('itinerary_id')}}/>
            <FormErrorMessage>{errors.itinerary_id?.message}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <Button type="submit"
                    disabled={isSubmitting}
                    className={styles.registryModalFormSubmit}>
              Забронировать гида
            </Button>
          </FormControl>
        </form>
      </div>
    </Modal>
  )
}

export default RegistryModal
