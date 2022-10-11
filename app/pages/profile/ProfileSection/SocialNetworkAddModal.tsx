import React from "react";
import {useForm} from "react-hook-form";
import {IAddNewSocialNetwork} from "../../../constants/interfaces";
import Modal from "../../../components/Modal";
import FormControl from "../../../components/Form/FormControl";
import FormLabel from "../../../components/Form/FormLabel";
import Input from "../../../components/Form/Input";
import FormErrorMessage from "../../../components/Form/FormErrorMessage";
import Button from "../../../components/Form/Button/Button";
import styles from "./styles.module.scss"

type Props = {
  isShow: boolean,
  handleClose: () => void,
  type: 'instagram' | 'facebook' | 'twitter' | false
}

const SocialNetworkAddModal: React.FC<Props> = ({isShow, handleClose, type}) => {
  const {formState, register, handleSubmit, control, reset, getValues} = useForm<IAddNewSocialNetwork>({
    mode: 'onSubmit',
  })
  const {errors, isSubmitting} = formState

  const onSubmit = () => {

  }

  return (
    <Modal isShow={isShow} handleClose={handleClose}>
      <div className={styles.socialModal}>
        <h4>Добавить ссылку на профиль в {type}</h4>
        <form className={styles.socialModalForm} onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel>Ссылка на профиль</FormLabel>
            <Input placeholder="URL ссылка на профиль" {...register('url')}/>
            <FormErrorMessage>{errors.url?.message}</FormErrorMessage>
            <div className={styles.socialModalControls}>
              <Button className={styles.editSubmit}>
                Добавить
              </Button>
              <Button>
                Отмена
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    </Modal>
  )
}

export default SocialNetworkAddModal
