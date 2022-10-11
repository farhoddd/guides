export interface Welcome {
	data?: Datum[];
	links?: Links;
	meta?: Meta;
}

export interface Datum {
	id?: number;
	name?: string;
	locales?: LocaleElement[];
	answers: [];
	correct?: string;
	page: string;
}
// export interface Answers {
// 	id: number;
// 	name: string;
// 	locales?: LocaleElement[];
// 	answers?: Datum[];
// 	correct?: string;
// 	page?: number | string;
// }

export interface LocaleElement {
	locale?: LocaleEnum;
	name?: string;
}

export enum LocaleEnum {
	Ru = "ru",
}

export interface Links {
	first?: string;
	last?: string;
	prev?: null;
	next?: string;
}

export interface Meta {
	current_page?: number;
	from?: number;
	last_page?: number;
	links?: Link[];
	path?: string;
	per_page?: number;
	to?: number;
	total?: number;
}

export interface Link {
	url?: null | string;
	label?: string;
	active?: boolean;
}
