import axios from "axios";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Wrapper from "../../app/components/Wrapper";
import NavigationBack from "../../app/components/NavigationBack";
import TestContainer from "../../app/pages/test/TestContainer";
import { Datum } from "../../types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import { TestProvider } from "../../app/pages/test/TestConext";

const testList: NextPage<{ data: Datum }> = ({ data }) => {
	return (
		<Wrapper>
			<div className='container'>
				<NavigationBack />
				<TestContainer data={data} />
			</div>
		</Wrapper>
	);
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	const authToken =
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGM3MzBiMWM2ODA1NmI0ZjgxNTgzYTk1MjE4MWYyY2FjMWFjODJmMjVkYTFmZWU1N2I1NTVlMjE5OGQzNjliMjU1YzlmODhiOWYwOGNjYTkiLCJpYXQiOjE2NTAxMzkzNTcuODI0NzU5LCJuYmYiOjE2NTAxMzkzNTcuODI0NzY1LCJleHAiOjE2ODE2NzUzNTcuNzk4MTY4OSwic3ViIjoiMTcyNCIsInNjb3BlcyI6W119.ZQULap3OpQKWJyFU2L9w5o8OwszUvNjgdgQDhCeeESth_gLZpgGrwTxPOA1i8tMW17BrmYSFpq8Fcanhbca6LJnhayVZ66uNhotxZqneTFBAT3fLlUZOkrSHwvwqPu_xnliX4U8IvdIAj4gUtMlOZJN6eqyb-zy_UmjzaTApZsSydS5tOYgHtKaknRMTrdHFdf5Ztb29Etax9Nk1AjwaRp1L3xQhqZHzZRio8-n7xIagcWz9sIHeFbS47VzvUrwzmeQ6hylUgqU6Vio9cBtL6cs_aZgboFu5ICLkKbAcGoATJukND99l49-ZhSdiTyWBSsIb05aKlYSO_fnojiWwUALkFc36ngsQdghNXf5n5rsHj0lg-yf9ERAPVM95b1Q2AO27XCmnxtM2pG4qOFCOeA8Bq4FygcGzfQwQc2DiwcDwCzNI-E-B3u6IhyEgjSKKIiLsO00ZQg7K4iiASkyeEiZFW9ofBto2Nq99B89Q6TZlzM_-GFlAaIQpBoTQTObMEiJgvRR86bz8AvVOs6XQRgnjsRzLdMhGRBVxEoWaV8BmlHe4sq6QkfFspwyRtWhridntsy1eZj6UZhbEDXTCBFXysEzX5eXfQP7uVz7AisyJu7m6mvssijyDGYh_yqJHaQko7YAfhR-Mt527U5CHexpY_KZywkyrm7JZujyK6Fw";

	const data: [] = await axios

		.get("https://guide-backend.crocos.kz/api/v1/questions", {
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		})
		.then((res) => {
			return res.data.data;
		})
		.catch((err) => {
			console.log(err);
		});
	data.forEach((item: Datum, index) => (item.page = index + 1));

	const paths = data.map((test: Datum) => {
		return {
			params: { page: `${String(test.page)}` },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context;
	const { locale } = context;
	const authToken =
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGM3MzBiMWM2ODA1NmI0ZjgxNTgzYTk1MjE4MWYyY2FjMWFjODJmMjVkYTFmZWU1N2I1NTVlMjE5OGQzNjliMjU1YzlmODhiOWYwOGNjYTkiLCJpYXQiOjE2NTAxMzkzNTcuODI0NzU5LCJuYmYiOjE2NTAxMzkzNTcuODI0NzY1LCJleHAiOjE2ODE2NzUzNTcuNzk4MTY4OSwic3ViIjoiMTcyNCIsInNjb3BlcyI6W119.ZQULap3OpQKWJyFU2L9w5o8OwszUvNjgdgQDhCeeESth_gLZpgGrwTxPOA1i8tMW17BrmYSFpq8Fcanhbca6LJnhayVZ66uNhotxZqneTFBAT3fLlUZOkrSHwvwqPu_xnliX4U8IvdIAj4gUtMlOZJN6eqyb-zy_UmjzaTApZsSydS5tOYgHtKaknRMTrdHFdf5Ztb29Etax9Nk1AjwaRp1L3xQhqZHzZRio8-n7xIagcWz9sIHeFbS47VzvUrwzmeQ6hylUgqU6Vio9cBtL6cs_aZgboFu5ICLkKbAcGoATJukND99l49-ZhSdiTyWBSsIb05aKlYSO_fnojiWwUALkFc36ngsQdghNXf5n5rsHj0lg-yf9ERAPVM95b1Q2AO27XCmnxtM2pG4qOFCOeA8Bq4FygcGzfQwQc2DiwcDwCzNI-E-B3u6IhyEgjSKKIiLsO00ZQg7K4iiASkyeEiZFW9ofBto2Nq99B89Q6TZlzM_-GFlAaIQpBoTQTObMEiJgvRR86bz8AvVOs6XQRgnjsRzLdMhGRBVxEoWaV8BmlHe4sq6QkfFspwyRtWhridntsy1eZj6UZhbEDXTCBFXysEzX5eXfQP7uVz7AisyJu7m6mvssijyDGYh_yqJHaQko7YAfhR-Mt527U5CHexpY_KZywkyrm7JZujyK6Fw";

	const response = await axios

		.get("https://guide-backend.crocos.kz/api/v1/questions", {
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		})
		.then((res) => {
			return res.data.data;
		})
		.catch((err) => {
			console.log(err);
		});
	response.forEach((item: Datum, index: number) => (item.page = index + 1));

	const data = await response.filter((test: Datum) => test.page == params.page);

	return {
		props: {
			...(await serverSideTranslations(
				locale as string,
				["headerMenu", "system", "education", "registry", "alphabet"],
				nextI18NextConfig
			)),
			data: data[0],
		},
	};
};

export default testList;
