import React from "react";
import styles from "./styles.module.scss"
import classNames from "classnames";
import TablePagination from "./TablePagination";
import {IPagination} from "../../constants/interfaces";

type Props = {
  className?: string,
  pagination?: boolean,
  paginationData?: IPagination,
  updatePaginationData?: any,
  updateListData?: any,
}

const Table: React.FC<Props> =
  ({
     children,
     className,
     pagination,
     paginationData,
     updateListData,
     updatePaginationData
   }) => {

    return (
      <>
        <table className={classNames(styles.table, className)}>
          {children}
        </table>
        <TablePagination
          updatePaginationData={updatePaginationData}
          updateListData={updateListData}
          paginationData={paginationData}/>
      </>
    )
  }

export default Table
