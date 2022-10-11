import React from "react";
import styles from "./styles.module.scss";

type Props = {

}

const TestTitle: React.FC = ({children}) => {

  return <div className={styles.testTitle}>{children}</div>
}

export default TestTitle
