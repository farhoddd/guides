import React, {useEffect, useState} from "react";
import TableWrapper from "../../../components/Table/TableWrapper";
import styles from "./styles.module.scss"
import ProfileRequestsSortBlock from "./ProfileRequestsSortBlock";
import ProfileRequestsTable from "./ProfileRequestsTable";
import {useAuthContext} from "../../../context/auth";
import {GuideService} from "../../../services/GuideService";
import {UserRequest} from "../../../types/types";
import {IPagination} from "../../../constants/interfaces";

const ProfileRequests: React.FC = () => {
  const {userInfo} = useAuthContext()
  const [guideRequests, setGuideRequests] = useState<UserRequest[]>([])
  const [paginationData, setPaginationData] = useState<IPagination>({
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0,
    prevLink: null,
    nextLink: null,
    from: 1,
    to: 1
  })

  useEffect(() => {
    getGuideBookingsList()
  }, [])

  const getGuideBookingsList = () => {
    GuideService
      .getGuideBookings(userInfo.id)
      .then(response => {
        const meta = response.data?.meta
        setGuideRequests(response.data?.data)
        setPaginationData({
          itemsPerPage: meta?.per_page,
          currentPage: meta?.current_page,
          totalItems: meta?.total,
          from: meta?.from,
          to: meta?.to,
          prevLink: response.data?.links?.prev,
          nextLink: response.data?.links?.next
        })
      })
      .catch(err => console.log(err.response))
  }

  return (
    <TableWrapper className={styles.requests}>
      <ProfileRequestsSortBlock requestsCount={paginationData.totalItems}/>
      <ProfileRequestsTable tableData={guideRequests}
                            updateRequestsList={setGuideRequests}
                            updatePagination={setPaginationData}
                            paginationData={paginationData}/>
    </TableWrapper>
  )
}

export default ProfileRequests
