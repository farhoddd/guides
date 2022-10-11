import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss"
import ChevronLeft from "../../icons/ChevronLeft";
import {IPagination} from "../../constants/interfaces";
import {GuideService} from "../../services/GuideService";
import {useLoadingContext} from "../../context/loading";

type Props = {
  paginationData: IPagination | undefined,
  updatePaginationData?: any,
  updateListData?: any,
}

const TablePagination: React.FC<Props> = ({paginationData, updatePaginationData, updateListData}) => {
  const [itemsPerPageDropDownShown, setItemsPerPageDropDownShown] = useState(false)
  const [itemsPerPage, setItemsPerPage] = useState(paginationData?.itemsPerPage)
  const {isLoading, setIsLoading} = useLoadingContext()

  useEffect(() => {
    setItemsPerPage(paginationData?.itemsPerPage)
  }, [paginationData?.itemsPerPage])

  const switchNextPage = () => {
    setIsLoading(true)
    GuideService.paginate(paginationData?.nextLink, paginationData?.itemsPerPage || 10)
      .then(response => {
        const meta = response.data?.meta
        updateListData(response.data?.data)
        updatePaginationData({
          itemsPerPage: meta?.per_page,
          currentPage: meta?.current_page,
          totalItems: meta?.total,
          from: meta?.from,
          to: meta?.to,
          prevLink: response.data?.links?.prev,
          nextLink: response.data?.links?.next
        })
      })
      .finally(() => setIsLoading(false))
  }

  const switchPreviousPage = () => {
    setIsLoading(true)
    GuideService.paginate(paginationData?.prevLink, paginationData?.itemsPerPage || 10)
      .then(response => {
        const meta = response.data?.meta
        updateListData(response.data?.data)
        updatePaginationData({
          itemsPerPage: meta?.per_page,
          currentPage: meta?.current_page,
          totalItems: meta?.total,
          from: meta?.from,
          to: meta?.to,
          prevLink: response.data?.links?.prev,
          nextLink: response.data?.links?.next
        })
      })
      .finally(() => setIsLoading(false))
  }

  const handleItemsPerPageDropDown = () => {
    setItemsPerPageDropDownShown(prevState => !prevState)
  }

  const handleChangeItemsPerPage = (value: number) => {
    updatePaginationData((prevState: any) => ({...prevState, itemsPerPage: value}))
    setItemsPerPage(value)
    setItemsPerPageDropDownShown(false)
    setIsLoading(true)
    GuideService.getGuideList(value)
      .then(response => {
        const meta = response.data?.meta
        updateListData(response.data?.data)
        updatePaginationData({
          itemsPerPage: meta?.per_page,
          currentPage: meta?.current_page,
          totalItems: meta?.total,
          from: meta?.from,
          to: meta?.to,
          prevLink: response.data?.links?.prev,
          nextLink: response.data?.links?.next
        })
      })
      .finally(() => setIsLoading(false))
  }

  return <div className={styles.pagination}>
    <div className={styles.paginationItemsPerPage}>
      Строк на странице:
      <div className={itemsPerPageDropDownShown ? styles.dropdownOpen : ""}><span onClick={handleItemsPerPageDropDown}>{itemsPerPage}<ChevronLeft/></span>
        <ul className={styles.dropdown}>
          <li onClick={() => handleChangeItemsPerPage(10)}>10</li>
          <li onClick={() => handleChangeItemsPerPage(20)}>20</li>
          <li onClick={() => handleChangeItemsPerPage(30)}>30</li>
        </ul>
      </div>
    </div>
    <div className={styles.paginationCurrentPage}>
      {`${paginationData?.from ?? 0}-${paginationData?.to ?? 0} из ${paginationData?.totalItems ?? 0}`}
    </div>
    <div className={styles.paginationControls}>
      <button disabled={!paginationData?.prevLink} onClick={switchPreviousPage}>
        <ChevronLeft/>
      </button>
      <button disabled={!paginationData?.nextLink} onClick={switchNextPage}>
        <ChevronLeft/>
      </button>
    </div>
  </div>
}

export default TablePagination
