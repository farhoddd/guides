import {
	RouteDescription,
	UserFacility,
	UserLanguage,
	UserProfileImage,
} from "../types/types";

export interface IEgovVerificationModel {
	ecp: string;
}

export interface IUserDataFromEgovModel {
	surname: string;
	name: string;
	patronymic: string;
	birthDate: string;
	tin: number;
	email: string;
	organization: string;
	bin: string;
}

export interface ISignUpUserDataModel {
	activity_id: number | null;
	region_of_service_id: number | null;
	phone: string;
	surname: string;
	name: string;
	patronymic: string;
	tin: string;
	email: string;
	address: string;
	password: string;
	passwordConfirmation: string;
	type?: "ecp" | "standart";
}

export interface ISignInUserDataModel {
	username: string;
	password: string;
}

export interface IEditUserDataModel {
	surname: string;
	name: string;
	patronymic: string;
	region_of_service_id: number;
	address: string;
	email: string;
	phone: string;
	about: string;
}

export interface ILanguageAndProfileEditDataModel {
	image: UserProfileImage | null;
	languages: IAddNewLanguage[];
}

export interface IAddNewLanguage {
	id: number;
	certificate: FileList | File | null;
}

export interface IAddNewSocialNetwork {
	url: string;
}

export interface IPagination {
	itemsPerPage: number;
	currentPage: number;
	totalItems: number;
	prevLink: string | null;
	nextLink: string | null;
	from: number;
	to: number;
}

export interface IAddNewTour {
	region_id: number;
	category_id: number;
	locales: {
		kz: RouteDescription;
		ru: RouteDescription;
		en: RouteDescription;
	};
	image: File[];
	images: File[];
}

export interface IBookGuide {
	full_name: string;
	phone: string;
	date: string;
	itinerary_id: number;
	guide_card_id?: number;
}
