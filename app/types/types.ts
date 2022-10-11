export type Region = {
	readonly id: number;
	name: string;
};

export type TourCategory = {
	readonly id: number;
	name: string;
};

export type Activity = {
	readonly id: number;
	name: string;
};

export type Locale = {
	locale: string;
	name: string;
};

export type Facility = {
	readonly id: number;
	name: string;
	locales: Locale[];
};

export type Language = {
	readonly id: number;
	name: string;
};

export type User = {
	readonly id: number;
	surname: string;
	name: string;
	patronymic: string;
	email: string;
	phone: string;
	image: string;
	address: string;
	qr: string;
	guide_card: {
		activity: {
			id: number;
			name: string;
		};
		rating: number;
		experience: number;
		number_of_notification: number;
		date_of_registration: string;
		region_of_service: {
			id: 1;
			name: string;
		};
		languages: Language[];
		facilities: Facility[];
	};
};

export type ProfilePageTab = {
	iconPath: string;
	title: string;
	path: string;
};

export type UserProfileImage = {
	document: File | null;
	link: string | null;
};

export type UserLanguage = {
	id: number;
	certificate: File;
};

export type UserFacility = {
	id: number;
};

export type UserRequest = {
	readonly id: number;
	date: string;
	created_at: string;
	full_name: string;
	phone: string;
	route: {
		readonly id: number;
		name: string;
	};
	guide_card: {
		id: number;
	};
};

export type UserTour = {
	readonly id: number;
	tourName: string;
	locales: {
		locale: "kz" | "ru" | "en";
		name: string;
		route_description?: string | null | undefined;
		additional_information?: string | null | undefined;
	}[];
	region: {
		readonly id: number;
		name: string;
	};
	category: {
		readonly id: number;
		name: string;
	};
	image: string;
	images: {
		readonly id: number;
		src: string;
	}[];
};

export type UserReview = {
	guide?: string;
	comment: string;
	stars: number;
};

export type EducationModule = {
	readonly id: number;
	name: string;
	isOwned: boolean;
	imagePath: string;
	about?: string;
};

export type RouteDescription = {
	name: string;
	route_description: string;
	additional_information: string;
};
export type dataTest = {
	id: number;
	name: string;
	locales: [];
	answers: [];
};
