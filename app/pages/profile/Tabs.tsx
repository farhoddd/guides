import React from "react";
import styles from "./styles.module.scss"
import Tab from "./Tab";
import {ProfileTabs} from "../../constants/constants";

type Props = {
  activeTab: number,
}

const ProfilePageTabs: React.FC<Props> = ({activeTab}) => {
  return <div className={styles.tabs}>
    {ProfileTabs.map((tab, index) => (
      <Tab iconPath={tab.iconPath} active={activeTab === index} path={tab.path} title={tab.title} key={index}/>
    ))}
  </div>
}

export default ProfilePageTabs
