import React from "react";
import { User } from "../../../types/types";
import { useForm } from "react-hook-form";
import {
	IEditUserDataModel,
	ILanguageAndProfileEditDataModel,
} from "../../../constants/interfaces";
import useRegions from "../../../hooks/useRegions";
import FormLabel from "../../../components/Form/FormLabel";
import Input from "../../../components/Form/Input";
import FormErrorMessage from "../../../components/Form/FormErrorMessage";
import FormControl from "../../../components/Form/FormControl";
import Button from "../../../components/Form/Button/Button";
import styles from "./styles.module.scss";
import InputSelect from "../../../components/Form/Select";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserProfileEditSchema } from "../../../constants/validation";
import { UserProfileService } from "../../../services/UserProfileService";
import ProfileInformationImageEdit from "./ProfileInformationImageEdit";
import FacebookIcon from "../../../icons/FacebookIcon";
import InstagramIcon from "../../../icons/InstagramIcon";
import TwitterIcon from "../../../icons/TwitterIcon";
import TextArea from "../../../components/Form/TextArea";

type Props = {
	userInfo: User | null;
	showInformationSection: () => void;
	profileEditData: ILanguageAndProfileEditDataModel;
	setProfileEditData: any;
	submitUserInfo: (data: IEditUserDataModel, setError: any) => void;
};

const ProfileInformationEdit: React.FC<Props> = ({
	userInfo,
	showInformationSection,
	submitUserInfo,
	profileEditData,
	setProfileEditData,
}) => {
	const [regions] = useRegions();

	const { formState, register, handleSubmit, control, setError } =
		useForm<IEditUserDataModel>({
			mode: "onBlur",
			defaultValues: {
				about: "Раскажите о себе и о своем опыте гида",
				name: userInfo?.name,
				surname: userInfo?.surname,
				patronymic: userInfo?.patronymic,
				address: userInfo?.address,
				email: userInfo?.email,
				phone: userInfo?.phone,
				region_of_service_id: userInfo?.guide_card?.region_of_service?.id,
			},
			resolver: yupResolver(UserProfileEditSchema),
		});
	const { errors, isSubmitting, isValid } = formState;

	return (
		<>
			<form
				onSubmit={handleSubmit((data) => submitUserInfo(data, setError))}
				className={styles.editForm}
			>
				<div className={styles.editSmall}>
					<ProfileInformationImageEdit
						userInfo={userInfo}
						profileEditData={profileEditData}
						setProfileEditData={setProfileEditData}
					/>
				</div>
				<FormControl className='form__block--line'>
					<FormLabel htmlFor='name'>Имя</FormLabel>
					<Input
						disabled
						placeholder='Имя'
						register={{ ...register("name") }}
					/>
					<FormErrorMessage>{errors.name?.message}</FormErrorMessage>
				</FormControl>
				<FormControl className='form__block--line'>
					<FormLabel htmlFor='surname'>Фамилия</FormLabel>
					<Input
						disabled
						placeholder='Фамилия'
						register={{ ...register("surname") }}
					/>
					<FormErrorMessage>{errors.surname?.message}</FormErrorMessage>
				</FormControl>
				<FormControl className='form__block--line'>
					<FormLabel htmlFor='patronymic'>Отчество</FormLabel>
					<Input
						disabled
						placeholder='Отчество'
						register={{ ...register("patronymic") }}
					/>
					<FormErrorMessage>{errors.patronymic?.message}</FormErrorMessage>
				</FormControl>
				<FormControl className='form__block--line'>
					<FormLabel htmlFor='region_of_service_id'>Регион</FormLabel>
					<InputSelect
						placeholder='Регион'
						control={control}
						options={regions}
						register={{ ...register("region_of_service_id") }}
					/>
					<FormErrorMessage>
						{errors.region_of_service_id?.message}
					</FormErrorMessage>
				</FormControl>
				<FormControl className='form__block--line'>
					<FormLabel htmlFor='address'>Адрес</FormLabel>
					<Input placeholder='Адрес' register={{ ...register("address") }} />
					<FormErrorMessage>{errors.address?.message}</FormErrorMessage>
				</FormControl>
				<FormControl className='form__block--line'>
					<FormLabel htmlFor='email'>email</FormLabel>
					<Input placeholder='email' register={{ ...register("email") }} />
					<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
				</FormControl>
				<FormControl className='form__block--line'>
					<FormLabel htmlFor='phone'>Телефон</FormLabel>
					<Input
						type='phone'
						placeholder='Телефон'
						register={{ ...register("phone") }}
					/>
					<FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
				</FormControl>
				<FormControl className='form__block--line'>
					<FormLabel htmlFor='about'>Раскажите о себе и своем опыте</FormLabel>
					<TextArea
						placeholder='Раскажите о себе и своем опыте'
						register={{ ...register("about") }}
					/>
					<FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
				</FormControl>
				<div className={styles.editSmall}>
					<div className={styles.editSocialsSmall}>
						<h6 className={styles.editContentHeading}>Социальные сети</h6>
						<FacebookIcon />
						<InstagramIcon />
						<TwitterIcon />
					</div>
				</div>
				<Button
					type='submit'
					className={styles.editSubmit}
					disabled={isSubmitting}
				>
					Сохранить
				</Button>
				<Button onClick={showInformationSection}>Отменить</Button>
			</form>
		</>
	);
};

export default ProfileInformationEdit;
