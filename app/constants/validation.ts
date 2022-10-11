import * as yup from "yup";

export const UserSignUpSchema = yup.object().shape({
	name: yup.string().max(255).required(),
	surname: yup.string().max(255).required(),
	patronymic: yup.string().max(255).required(),
	tin: yup.string().max(255).required(),
	address: yup.string().max(255).required(),
	phone: yup.string().test({
		name: "phoneValidation",
		test: (value) => {
			if (!value) {
				return false;
			} else if (value.replace(/_/g, "").length !== 18) {
				return false;
			}
			return true;
		},
		message: "Incorrect number format",
	}),
	email: yup.string().max(255).email().required(),
	password: yup.string().min(8).required(),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref("password"), null])
		.required(),
});

export const UserSignInSchema = yup.object().shape({
	username: yup.string().required(),
	password: yup.string().required(),
});

export const UserProfileEditSchema = yup.object().shape({
	name: yup.string().required(),
	about: yup.string().required(),
	surname: yup.string().required(),
	patronymic: yup.string().nullable(),
	address: yup.string().required(),
	email: yup.string().required(),
	phone: yup.string().test({
		name: "phoneValidation",
		test: (value) => {
			if (!value) {
				return false;
			} else if (value.replace(/_/g, "").length !== 18) {
				return false;
			}
			return true;
		},
		message: "Некорректный формат номера",
	}),
	region_of_service_id: yup.number().required(),
});

export const UserLanguageAddSchema = yup.object().shape({
	id: yup.number().required(),
	certificate: yup
		.mixed()
		.test({
			name: "FileListLength",
			test: (fileList: FileList) => {
				return fileList.length !== 0;
			},
			message: "Файл не прикреплен",
		})
		.test(
			"fileSize",
			"Файл превышает максимальный размер 5мб",
			(value) => value && value[0].size / 1024 <= 5120
		),
});

export const TourAddSchema = yup.object().shape({
	region_id: yup.number().required(),
	category_id: yup.number().required(),
	locales: yup.object().shape({
		ru: yup.object().shape({
			name: yup.string().required(),
			route_description: yup.string().required(),
		}),
	}),
	image: yup
		.mixed()
		.test({
			name: "FileListLength",
			test: (fileList: FileList | Array<File> | null) => {
				return !fileList || fileList.length !== 0;
			},
			message: "Файл не прикреплен",
		})
		.test(
			"fileSize",
			"Файл превышает максимальный размер 5мб",
			(value) => value && value.length !== 0 && value[0].size / 1024 <= 5120
		),
	// images: yup.array().of(
	//   yup.mixed()
	//     .test(
	//       "fileSize",
	//       "Файл превышает максимальный размер 5мб",
	//       value => value && (value[0].size / 1024) <= 5120
	//     ),
	// )
});

export const GuideBookSchema = yup.object().shape({
	full_name: yup.string().required(),
	phone: yup.string().test({
		name: "phoneValidation",
		test: (value) => {
			if (!value) {
				return false;
			} else if (value.replace(/_/g, "").length !== 18) {
				return false;
			}
			return true;
		},
		message: "Некорректный формат номера",
	}),
	date: yup.date().required(),
	itinerary_id: yup.number().required(),
});
