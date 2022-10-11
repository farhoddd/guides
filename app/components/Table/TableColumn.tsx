import React, {HTMLAttributes, ReactHTMLElement, TableHTMLAttributes} from "react";
import classNames from "classnames";
import styles from "./styles.module.scss"

type Props = HTMLAttributes<HTMLTableRowElement> & {
  bold?: boolean,
  className?: string,
  colSpan?: number,
  rowSpan?: number
}

const TableColumn: React.FC<Props> = ({children, bold, className, colSpan, rowSpan, ...props}) => {

  // @ts-ignore
  return <td colSpan={colSpan} rowSpan={rowSpan} className={classNames(bold && styles.bold, className)} {...props}>{children}</td>
}

export default TableColumn
