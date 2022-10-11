import React from "react";
import {useTranslation} from "next-i18next";
import Table from "../../components/Table/Table";
import TableHead from "../../components/Table/TableHead";
import TableBody from "../../components/Table/TableBody";
import TableRow from "../../components/Table/TableRow";
import TableColumn from "../../components/Table/TableColumn";
import styles from "./styles.module.scss"
import {User} from "../../types/types";
import {IPagination} from "../../constants/interfaces";
import Link from "next/link";
import {Routes} from "../../constants/routes";

type Props = {
  guides: User[],
  paginationData: IPagination,
  updatePagination: any,
  updateGuidesList: any
}

const RegistryTable: React.FC<Props> = ({guides, paginationData, updateGuidesList, updatePagination}) => {
  const {t} = useTranslation(['registry', 'alphabet'])
  const letters = t('alphabet', {ns: 'alphabet', returnObjects: true}) as Array<string>


  return (
    <Table updateListData={updateGuidesList} updatePaginationData={updatePagination} paginationData={paginationData}
           className={styles.list}>
      <TableHead>
        <TableRow className={styles.listRowHead}>
          <TableColumn bold className={styles.listRowHead}>ФИО</TableColumn>
          <TableColumn bold className={styles.listRowHead}>Рейтинг</TableColumn>
          <TableColumn bold className={styles.listRowHead}>Вид деятельности</TableColumn>
          <TableColumn bold className={styles.listRowHead}>Регион</TableColumn>
          <TableColumn bold className={styles.listRowHead}>Номер уведомления</TableColumn>
          <TableColumn bold className={styles.listRowHead}>Дата уведомления</TableColumn>
          <TableColumn bold className={styles.listRowHead}>Стаж</TableColumn>
        </TableRow>
      </TableHead>
      <TableBody>
        {guides.map((guide) => (
          <TableRow key={guide.id}>
            <TableColumn tabIndex={guide.id}>
              <Link href={`${Routes.registry}/${guide.id}`} passHref key={guide.id}>
                <a>
                  {`${guide.surname} ${guide.name} ${guide.patronymic}`}
                </a>
              </Link>
            </TableColumn>
            <TableColumn tabIndex={guide.id}>
              {`${guide.guide_card?.rating ?? '-'}`}
            </TableColumn>
            <TableColumn tabIndex={guide.id}>{`${guide.guide_card?.activity?.name ?? '-'}`}</TableColumn>
            <TableColumn tabIndex={guide.id}>{`${guide.guide_card?.region_of_service ?? '-'}`}</TableColumn>
            <TableColumn tabIndex={guide.id}>{`${guide.guide_card?.number_of_notification ?? '-'}`}</TableColumn>
            <TableColumn tabIndex={guide.id}>{`${guide.guide_card?.date_of_registration ?? '-'}`}</TableColumn>
            <TableColumn tabIndex={guide.id}>{`${guide.guide_card?.experience ?? '-'}`}</TableColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default RegistryTable
