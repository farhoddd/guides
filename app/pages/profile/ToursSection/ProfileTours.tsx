import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import SubHeading from "../../../components/SubHeading";
import ProfileToursSortBlock from "./ProfileToursSortBlock";
import ProfileToursList from "./ProfileToursList";
import { UserTour } from "../../../types/types";
import ProfileToursTourAddView from "./AddNewTourForm/ProfileToursTourAddView";
import { GuideService } from "../../../services/GuideService";
import { useAuthContext } from "../../../context/auth";
import ProfileToursDeleteModal from "./ProfileToursDeleteModal";
import { useLoadingContext } from "../../../context/loading";

type Props = {};

const ProfileTours: React.FC<Props> = () => {
	const [addNewTourFormVisible, setAddNewTourFormVisible] = useState(false);
	const [tourList, setTourList] = useState<UserTour[]>([]);
	const [deleteModalWindowInfo, setDeleteModalWindowInfo] = useState({
		isShow: false,
		tourId: 0,
	});
	const { userInfo } = useAuthContext();
	const { isLoading, setIsLoading } = useLoadingContext();

	useEffect(() => {
		fetchGuideTours();
	}, []);

	const openAddNewTourForm = () => setAddNewTourFormVisible(true);
	const closeAddNewTourForm = () => {
		setAddNewTourFormVisible(false);
		fetchGuideTours();
	};

	const openDeleteModalWindow = (tourId: number) =>
		setDeleteModalWindowInfo({ isShow: true, tourId });
	const closeDeleteModalWindow = () => {
		setDeleteModalWindowInfo({ isShow: false, tourId: 0 });
		fetchGuideTours();
	};

	const fetchGuideTours = () => {
		setIsLoading(true);
		GuideService.getGuideTourList(userInfo.id)
			.then((response) => {
				setTourList(response.data?.data);
			})
			.catch((err) => console.log(err.response))
			.finally(() => setIsLoading(false));
	};

	return (
		<div className={styles.tours}>
			<div>
				<SubHeading>Добавить маршруты</SubHeading>
			</div>
			{!addNewTourFormVisible && (
				<>
					<div>
						<ProfileToursSortBlock
							openAddNewTourForm={openAddNewTourForm}
							tours={tourList}
						/>
					</div>
					{/* <ProfileToursList openDeleteModalWindow={openDeleteModalWindow} tours={tourList}/> */}
					<ProfileToursDeleteModal
						tourId={deleteModalWindowInfo.tourId}
						isShow={deleteModalWindowInfo.isShow}
						handleClose={closeDeleteModalWindow}
					/>
				</>
			)}
			{addNewTourFormVisible && (
				<ProfileToursTourAddView closeAddNewTourForm={closeAddNewTourForm} />
			)}
		</div>
	);
};

export default ProfileTours;
