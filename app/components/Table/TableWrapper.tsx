import React from "react";
import styles from "./styles.module.scss"
import classNames from "classnames";

type Props = {
  className?: string
}

const TableWrapper: React.FC<Props> = ({children, className}) => {

  return (
    <div className={classNames(styles.tableWrapper, className)}>
      {children}
    </div>
  )
}

export default TableWrapper
