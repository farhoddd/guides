import React from "react";
import TableHead from "../../../components/Table/TableHead";
import TableRow from "../../../components/Table/TableRow";
import TableColumn from "../../../components/Table/TableColumn";
import TableBody from "../../../components/Table/TableBody";
import Table from "../../../components/Table/Table";
import {UserRequest} from "../../../types/types";
import styles from "./styles.module.scss"
import {IPagination} from "../../../constants/interfaces";

type Props = {
  tableData: UserRequest[],
  paginationData: IPagination,
  updatePagination: any,
  updateRequestsList: any
}

const ProfileRequestsTable: React.FC<Props> = ({tableData, paginationData, updatePagination, updateRequestsList}) => {

  return (
    <Table className={styles.table} updateListData={updateRequestsList} updatePaginationData={updatePagination}
           paginationData={paginationData}>
      <TableHead>
        <TableRow>
          <TableColumn bold>ФИО</TableColumn>
          <TableColumn bold>Номер телефона</TableColumn>
          <TableColumn bold>Маршрут</TableColumn>
          <TableColumn bold>Дата запроса</TableColumn>
          <TableColumn bold>Дата заявки</TableColumn>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((tableItem, index) => (
          <TableRow key={tableItem.id}>
            <TableColumn>
              {tableItem.full_name}
            </TableColumn>
            <TableColumn>
              {tableItem.phone}
            </TableColumn>
            <TableColumn>
              {tableItem.route?.name}
            </TableColumn>
            <TableColumn>
              {tableItem.date}
            </TableColumn>
            <TableColumn>
              {tableItem.created_at && new Date(tableItem.created_at).toISOString().split("T")[0]}
            </TableColumn>
          </TableRow>
        ))}
      </TableBody>
      {tableData.length === 0 && (
        <TableRow className={styles.tableEmpty}>
          <TableColumn colSpan={5} className={styles.tableEmpty}>
            У вас пока отсутствуют заявки
          </TableColumn>
        </TableRow>
      )}
    </Table>
  )
}

export default ProfileRequestsTable
