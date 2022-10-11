// @ts-nocheck
import React, {useState} from "react";
import {UserReview} from "../../types/types";
import ShowMoreText from "react-show-more-text";
import styles from "./styles.module.scss"
import ReviewExpandModal from "./ReviewExpandModal";

type Props = {
  review: UserReview
}

const ReviewItem: React.FC<Props> = ({review}) => {
  const [showMoreModalOpen, setShowMoreModalOpen] = useState(false)

  const openShowMoreModal = () => setShowMoreModalOpen(true)
  const closeShowMoreModal = () => setShowMoreModalOpen(false)

  return (
    <>
      <div className={styles.review}>
        <div className={styles.reviewTop}>
          <div className={styles.reviewTitle}>
            {review.guide ?? "Анонимный"}
          </div>
          <div className={styles.reviewLike}>
            {review.stars ?? 0}
          </div>
        </div>
        <div>
          <div className={styles.reviewDesc}>
            <ShowMoreText
              lines={4}
              more="Показать больше"
              onClick={openShowMoreModal}
              expanded={false}
              expandByClick={false}
            >
              {review.comment}
            </ShowMoreText>
          </div>
        </div>
      </div>
      <ReviewExpandModal review={review} isShow={showMoreModalOpen} handleClose={closeShowMoreModal}/>
    </>
  )
}

export default ReviewItem
