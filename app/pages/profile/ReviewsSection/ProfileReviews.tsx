import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss"
import SubHeading from "../../../components/SubHeading";
import ProfileReviewsList from "./ProfileReviewsList";
import {UserReview} from "../../../types/types";
import {useAuthContext} from "../../../context/auth";
import {GuideService} from "../../../services/GuideService";

const ProfileReviews = () => {
  const {userInfo} = useAuthContext()
  const [reviews, setReviews] = useState<UserReview[]>([])

  useEffect(() => {
    getListOfReviews()
  }, [])

  const getListOfReviews = () => {
    GuideService
      .getGuideReviews(userInfo.id)
      .then(response => setReviews(response.data?.data))
      .catch(err => console.log(err.response))
  }

  return (
    <div className={styles.reviews}>
      <div>
        <SubHeading>Мои отзывы</SubHeading>
      </div>
      <ProfileReviewsList reviews={reviews}/>
    </div>
  )
}
export default ProfileReviews
