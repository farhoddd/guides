import React from "react";
import styles from "./styles.module.scss"
import {UserReview} from "../../../types/types";
import ReviewItem from "../../../components/Review";

type Props = {
  reviews: UserReview[]
}

const ProfileReviewsList: React.FC<Props> = ({reviews}) => {

  return (
    <>
      <div className={styles.reviewsList}>
        {reviews.map((review, index) => <ReviewItem key={index} review={review}/>)}
      </div>
      {reviews.length === 0 && (
        <div className={styles.reviewsListEmpty}>
          Вам никто не оставлял отзывов
        </div>
      )}
    </>
  )
}

export default ProfileReviewsList
