import React from "react";
import Modal from "../Modal";
import styles from "./styles.module.scss"
import {UserReview} from "../../types/types";

type Props = {
  isShow: boolean,
  handleClose: () => void,
  review: UserReview
}

const ReviewExpandModal: React.FC<Props> = ({isShow, handleClose, review}) => {

  return <Modal isShow={isShow} handleClose={handleClose}>
    <div className={styles.reviewModal}>
      <div className={styles.reviewTop}>
        <div className={styles.reviewTitle}>
          {review.guide ?? "Анонимный отзыв"}
        </div>
        <div className={styles.reviewLike}>
          {review.stars}
        </div>
      </div>
      <div>
        <div className={styles.reviewDesc}>
          {review.comment}
        </div>
      </div>
    </div>
  </Modal>
}

export default ReviewExpandModal
