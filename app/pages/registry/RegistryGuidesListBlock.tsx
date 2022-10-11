import React, { useEffect, useRef, useState } from "react";
import RegistryTable from "./RegistryTable";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Input from "../../components/Form/Input";
import TableWrapper from "../../components/Table/TableWrapper";
import { GuideService } from "../../services/GuideService";
import { User } from "../../types/types";
import { IPagination } from "../../constants/interfaces";
import SearchIcon from "../../icons/SearchIcon";
import { useLoadingContext } from "../../context/loading";

const RegistryGuidesListBlock: React.FC = () => {
	const { t } = useTranslation(["registry", "alphabet"]);
	const letters = t("alphabet", {
		ns: "alphabet",
		returnObjects: true,
	}) as Array<string>;
	const [guideList, setGuideList] = useState<User[]>([]);
	const [paginationData, setPaginationData] = useState<IPagination>({
		itemsPerPage: 10,
		currentPage: 1,
		totalItems: 0,
		prevLink: null,
		nextLink: null,
		from: 1,
		to: 1,
	});
	const [activeLetter, setActiveLetter] = useState<number | undefined>();
	const { isLoading, setIsLoading } = useLoadingContext();
	const timeInterval = 300;
	const timer = useRef<any>(null);

	const onUserFinishesTyping = (event: any) => {
		clearTimeout(timer.current);
		if (event.target.value) {
			timer.current = setTimeout(
				() => searchByName(event.target.value),
				timeInterval
			);
		} else {
			setIsLoading(true);
			GuideService.getGuideList()
				.then((response) => {
					const meta = response.data?.meta;

					setGuideList(response.data?.data);
					setPaginationData({
						itemsPerPage: meta?.per_page,
						currentPage: meta?.current_page,
						totalItems: meta?.total,
						from: meta?.from,
						to: meta?.to,
						prevLink: response.data?.links?.prev,
						nextLink: response.data?.links?.next,
					});
				})
				.catch((err) => console.log(err.response))
				.finally(() => setIsLoading(false));
		}
	};

	const onLetterClick = (letter: string, index: number) => {
		setActiveLetter(index);
		setIsLoading(true);
		GuideService.sortByLetter("guides", letter)
			.then((response) => {
				const meta = response.data?.meta;
				setGuideList(response.data?.data);
				setPaginationData({
					itemsPerPage: meta?.per_page,
					currentPage: meta?.current_page,
					totalItems: meta?.total,
					from: meta?.from,
					to: meta?.to,
					prevLink: response.data?.links?.prev,
					nextLink: response.data?.links?.next,
				});
			})
			.catch((err) => console.log(err.response))
			.finally(() => setIsLoading(false));
	};

	const searchByName = (keyword: string) => {
		setIsLoading(true);
		GuideService.searchByName("guides", keyword)
			.then((response) => {
				const meta = response.data?.meta;
				setGuideList(response.data?.data);
				setPaginationData({
					itemsPerPage: meta?.per_page,
					currentPage: meta?.current_page,
					totalItems: meta?.total,
					from: meta?.from,
					to: meta?.to,
					prevLink: response.data?.links?.prev,
					nextLink: response.data?.links?.next,
				});
			})
			.catch((err) => console.log(err.response))
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		setIsLoading(true);
		GuideService.getGuideList()
			.then((response) => {
				const meta = response.data?.meta;
				setGuideList(response.data?.data);
				setPaginationData({
					itemsPerPage: meta?.per_page,
					currentPage: meta?.current_page,
					totalItems: meta?.total,
					from: meta?.from,
					to: meta?.to,
					prevLink: response.data?.links?.prev,
					nextLink: response.data?.links?.next,
				});
			})
			.catch((err) => console.log(err.response))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<TableWrapper className={classNames(styles.list)}>
			<div className='section__block--title'>
				{t("all_guides", { ns: "registry" })}
			</div>
			<div className='registry__table'>
				<div className='table__block--content'>
					<div className='table__block--filter'>
						<div className='table__filter--alphabet'>
							<div className='alphabet--title'>{t("alphabet")}:</div>
							<div className='alphabet--list'>
								<ul>
									{letters.map((letter, key) => (
										<li
											className={
												key === activeLetter ? styles.listActive : undefined
											}
											key={key}
										>
											<a onClick={() => onLetterClick(letter, key)}>{letter}</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className='table__filter--search'>
							<Input
								className={styles.listSearch}
								placeholder={t("search")}
								type='text'
								name='filter_search'
								icon={<SearchIcon />}
								onChange={onUserFinishesTyping}
							/>
						</div>
					</div>
					<RegistryTable
						updateGuidesList={setGuideList}
						updatePagination={setPaginationData}
						guides={guideList}
						paginationData={paginationData}
					/>
				</div>
			</div>
		</TableWrapper>
	);
};

export default RegistryGuidesListBlock;
