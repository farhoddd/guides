import React from "react";
import styles from "./styles.module.scss"
import Accordion from "../../components/Accordion";

const EducationItemProgramList: React.FC = () => {

  return (
    <div className={styles.educationModuleList}>
      <Accordion/>
      <Accordion/>
    </div>
  )
}

export default EducationItemProgramList
