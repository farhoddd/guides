import React, { RefObject, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import SubHeading from "../../components/SubHeading";
import ProfileInformation from "./ProfileSection/ProfileInformation";
import ProfileInformationEdit from "./ProfileSection/ProfileInformationEdit";
import ProfileInformationImage from "./ProfileSection/ProfileInformationImage";
import ProfileInformationImageEdit from "./ProfileSection/ProfileInformationImageEdit";
import { useAuthContext } from "../../context/auth";
import BadgeShowModal from "./ProfileSection/BadgeShowModal";
import {
	IEditUserDataModel,
	ILanguageAndProfileEditDataModel,
} from "../../constants/interfaces";
import { UserProfileService } from "../../services/UserProfileService";
import {
	convertObjectToFormData,
	displayErrorMessage,
	displaySuccessMessage,
	scrollToTop,
} from "../../utils/helpers";
import { useLoadingContext } from "../../context/loading";
import { AuthService } from "../../services/AuthService";

type Props = {
	smoothScrollToTop: () => void;
};

const ProfileSection: React.FC<Props> = ({ smoothScrollToTop }) => {
	const { userInfo, updateUserInfo } = useAuthContext();
	const [editSection, setEditSection] = useState(false);
	const [showBadge, setBagdeShow] = useState(false);
	const [profileEditData, setProfileEditData] =
		useState<ILanguageAndProfileEditDataModel>({
			languages: userInfo?.guide_card?.languages ?? [],
			image: {
				document: null,
				link: userInfo?.image,
			},
		});
	const { isLoading, setIsLoading } = useLoadingContext();

	useEffect(() => {
		setProfileEditData({
			languages: userInfo?.guide_card?.languages ?? [],
			image: {
				document: null,
				link: userInfo?.image,
			},
		});
	}, [userInfo]);

	const showInformationSection = () => {
		setEditSection(false);
		smoothScrollToTop();
	};
	const showEditSection = () => {
		setEditSection(true);
		smoothScrollToTop();
	};
	const closeBadgeModal = () => setBagdeShow(false);
	const openBadgeModal = () => {
		if (!userInfo?.image && userInfo?.guide_card?.languages?.length === 0)
			displayErrorMessage(
				"Для того чтобы отобразить бейджик нужно заполнить информацию о себе"
			);
		else setBagdeShow(true);
	};

	const submitUserInfo = (data: IEditUserDataModel, setError: any) => {
		if (
			profileEditData.image?.document === null &&
			profileEditData.image?.link === null
		) {
			displayErrorMessage("Пожалуйста, загрузите фотографию профиля!");
		}
		if (profileEditData.languages.length === 0) {
			displayErrorMessage("Пожалуйста, добавьте информацию о языках!");
		}
		if (
			(profileEditData.image?.document !== null ||
				profileEditData.image?.link !== null) &&
			profileEditData.languages.length > 0
		) {
			setIsLoading(true);
			const image: { document?: File; link?: string | null } = {};
			if (profileEditData.image?.document)
				image.document = profileEditData.image.document;
			else image.link = profileEditData.image?.link;
			const formData = convertObjectToFormData({
				...data,
				languages: profileEditData.languages,
				image: { ...image },
				_method: "PUT",
			});
			UserProfileService.updateUserData(userInfo?.id, formData)
				.then((response) => {
					displaySuccessMessage("Информация о профиле успешно обновлена!");
					AuthService.getCurrentUser().then((response) =>
						updateUserInfo(response.data?.data)
					);
					showInformationSection();
				})
				.catch((err) => {
					console.log(err.response);
				})
				.finally(() => setIsLoading(false));
		}
	};

	return (
		<div className={styles.profile}>
			<div className={styles.profileLeftSide}>
				<SubHeading uppercase>
					{editSection ? "Редактирование профиля" : "Добро пожаловать"}
				</SubHeading>
				{!editSection && (
					<ProfileInformation
						openBadgeModal={openBadgeModal}
						showEditSection={showEditSection}
						userInfo={userInfo}
					/>
				)}
				{editSection && (
					<ProfileInformationEdit
						profileEditData={profileEditData}
						setProfileEditData={setProfileEditData}
						showInformationSection={showInformationSection}
						submitUserInfo={submitUserInfo}
						userInfo={userInfo}
					/>
				)}
				{/*{JSON.stringify(userInfo)}*/}
			</div>
			<div className={styles.profileRightSide}>
				{!editSection && (
					<ProfileInformationImage
						openBadgeModal={openBadgeModal}
						userInfo={userInfo}
						showEditSection={showEditSection}
					/>
				)}
				{editSection && (
					<ProfileInformationImageEdit
						profileEditData={profileEditData}
						setProfileEditData={setProfileEditData}
						userInfo={userInfo}
					/>
				)}
			</div>
			<BadgeShowModal
				isShow={showBadge}
				handleClose={closeBadgeModal}
				userInfo={userInfo}
			/>
		</div>
	);
};

export default ProfileSection;
