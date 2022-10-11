import React from "react";
import styles from "./styles.module.scss"
import EducationItemBanner from "./EducationItemBanner";
import {EducationModule} from "../../types/types";
import NavigationBack from "../../components/NavigationBack";
import Heading from "../../components/Heading";
import Accordion from "../../components/Accordion";
import EducationItemProgramList from "./EducationItemProgramList";
import EducationProgress from "./EducationProgress";

type Props = EducationModule & {
  courseProgram: any[]
}

const EducationItem: React.FC<Props> = ({id, imagePath, name, isOwned, about, courseProgram}) => {

  return (
    <div className="container">
      <NavigationBack/>
      <EducationItemBanner name={name} imagePath={imagePath} isOwned={isOwned}/>
      <Heading uppercase className="mt-5">О Курсе</Heading>
      <div className="row">
        <div className="col-md-8">
          <div className={styles.educationModuleContent}>
            {about}
          </div>
        </div>
        <div className="col-md-4">
          <EducationProgress
            status="В процессе"
            percentage={30}
            content="Сертификат об окончании 4 раздела, 4 учебных материала"/>
        </div>
      </div>
      <Heading uppercase className="mt-5">Программа курса</Heading>
      <EducationItemProgramList/>
    </div>
  )
}

export default EducationItem
