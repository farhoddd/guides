import "../app/styles/bootstrap.min.css";
import "../app/styles/swiper.min.css";
import "../app/styles/global.scss";
import "../app/styles/main.scss";
import "../app/styles/media.css";
import "../app/components/KazTravelHeader/_kaztravel_header.scss";
import { appWithTranslation } from "next-i18next";

import type { AppProps } from "next/app";
import { GetServerSideProps } from "next";
import { LoadingContext, useLoading } from "../app/context/loading";
import { AuthContext } from "../app/context/auth";
import { useEffect, useState } from "react";
import { LocalStorageHandler } from "../app/utils/localStorageHandler";
import { Routes } from "../app/constants/routes";
import { AuthService } from "../app/services/AuthService";
import { useRouter } from "next/router";

import { TestProvider } from "../app/pages/test/TestConext";
import { Provider } from "react-redux";
import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
	const { isLoading, setIsLoading } = useLoading();
	const [userInfo, setUserInfo] = useState();
	const router = useRouter();

	const updateUserInfo = (userInfo: any) => {
		setUserInfo(userInfo);
	};

	useEffect(() => {
		const token = LocalStorageHandler.getUserToken();
		if (token) {
			AuthService.getCurrentUser()
				.then((response) => {
					updateUserInfo(response.data?.data);
				})
				.catch((err) => {
					console.log(err.response);
					LocalStorageHandler.clearUserToken();
					router.push(Routes.login);
				})
				.finally(() => setIsLoading(false));
		} else setIsLoading(false);
	}, []);

	return (
		<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
			<AuthContext.Provider value={{ userInfo, updateUserInfo }}>
				<TestProvider>
					<Provider store={store}>
						<Component {...pageProps} />
					</Provider>
				</TestProvider>
			</AuthContext.Provider>
		</LoadingContext.Provider>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			cookies: context.req.cookies ?? "",
		},
	};
};

export default appWithTranslation(MyApp);
