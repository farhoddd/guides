import React, {TdHTMLAttributes} from "react";

type Props = TdHTMLAttributes<HTMLTableDataCellElement> & {
  className?: string
}

const TableRow: React.FC<Props> = ({children, className, ...otherProps}) => {

  // @ts-ignore
  return <tr className={className} {...otherProps}>{children}</tr>
}

export default TableRow
