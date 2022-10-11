import React from "react";
import styles from "./styles.module.scss"
import {EducationModule as EducationItemType} from "../../types/types";
import EducationItemsListItem from "./EducationItemsListItem";

type Props = {
  educationItems: EducationItemType[]
}

const EducationItemsList: React.FC<Props> = ({educationItems}) => {

  return (
    <div className={`${styles.educationList} row`}>
      {educationItems.map((item) =>
        <EducationItemsListItem
          id={item.id}
          name={item.name}
          isOwned={item.isOwned}
          imagePath={item.imagePath}/>
      )}
    </div>
  )
}

export default EducationItemsList
