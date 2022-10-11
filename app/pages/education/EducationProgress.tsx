import React from "react";
import styles from "./styles.module.scss"

type Props = {
  status: string,
  content?: string,
  percentage?: number
}

const EducationProgress: React.FC<Props> = ({status, content, percentage}) => {

  return (
    <div className={styles.result}>
      <div className={styles.resultStatus}>{status}</div>
      {percentage && (
        <>
          <div className={styles.resultPercentage}>{percentage}%</div>
          <div className={styles.resultIndicator}>
            <div className={styles.resultIndicatorProgress} style={{width: `${percentage}%`}}/>
          </div>
        </>
      )}
      {!percentage && <div className={styles.resultContent}>{content}</div>}
    </div>
  )
}

export default EducationProgress
