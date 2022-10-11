import React, {RefObject} from "react";
import NavigationBack from "../NavigationBack";
import styles from "../../../pages/profile/styles.module.scss";
import Heading from "../Heading";
import ProfilePageTabs from "../../pages/profile/Tabs";
import Wrapper from "../Wrapper";

type Props = {
  activeTab: number,
  rootRef?: RefObject<HTMLDivElement>
}

const ProfileContainer: React.FC<Props> = ({children, activeTab, rootRef}) => {

  return (
    <Wrapper>
      <div className="container" ref={rootRef}>
        <NavigationBack/>
        <div className={styles.profileTitle}>
          <Heading>Личный <span>кабинет</span></Heading>
        </div>
        <div className={styles.profileTabs}>
          <ProfilePageTabs activeTab={activeTab}/>
        </div>
        <div className={styles.profileMain}>
          {children}
        </div>
      </div>
    </Wrapper>
  )
}

export default ProfileContainer
