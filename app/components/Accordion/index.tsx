import React, {useState} from "react";
import styles from "./styles.module.scss"
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import PlayIcon from "../../icons/PlayIcon";
import classNames from "classnames";

const Accordion: React.FC = () => {
  const [expanded, setExpanded] = useState(false)

  const handleClickExpand = () => {
    setExpanded(expanded => !expanded)
  }

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionTop}>
        <ChevronLeftIcon onClick={handleClickExpand}/>
        Модуль 1. Классификация экскурсий. Этапы подготовки экскурсии.
      </div>
      <div className={styles.accordionContent}>
        1 материал
        <div className={classNames(styles.accordionHidden, expanded && styles.accordionExpanded)}>
          <PlayIcon/> 7.1. Классификация экскурсий. Этапы подготовки экскурсии
        </div>
      </div>
    </div>
  )
}

export default Accordion
