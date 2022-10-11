import React from "react";
import styles from "./styles.module.scss"
import {useRouter} from "next/router";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";

type Props = {
  returnBackText?: string
}

const NavigationBack: React.FC<Props> = ({returnBackText}) => {
  const router = useRouter()

  const returnBack = () => {
    router.back()
  }

  return (
    <div className={styles.navigationBack} onClick={returnBack}>
      <ChevronLeftIcon/>
      <span>
        {returnBackText ? returnBackText : "Назад"}
      </span>
    </div>
  )
}

export default NavigationBack
