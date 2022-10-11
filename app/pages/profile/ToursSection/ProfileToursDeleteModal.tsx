import React from "react";
import Modal from "../../../components/Modal";
import styles from "./styles.module.scss"
import Button from "../../../components/Form/Button/Button";
import {GuideService} from "../../../services/GuideService";
import {displayErrorMessage, displaySuccessMessage} from "../../../utils/helpers";

type Props = {
  isShow: boolean,
  tourId: number,
  handleClose: () => void
}

const ProfileToursDeleteModal: React.FC<Props> = ({isShow, handleClose, tourId}) => {

  const deleteTour = () => {
    GuideService.deleteTour(tourId)
      .then(response => {
        handleClose()
        displaySuccessMessage("Тур был успешно удален!")
      })
      .catch(err => {
        console.log(err.response)
        displayErrorMessage("Произошла ошибка при удалении тура")
      })
  }

  return (
    <Modal isShow={isShow} handleClose={handleClose}>
      <div className={styles.delete}>
        <div>
          <h5>Вы уверены что хотите удалить данный тур?</h5>
          <p>
            Ваше действие отменить будет невозможно
          </p>
        </div>
        <div className={styles.deleteControls}>
          <Button onClick={deleteTour} className={styles.deleteControlsDanger}>
            Удалить
          </Button>
          <Button onClick={handleClose}>
            Отмена
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ProfileToursDeleteModal
