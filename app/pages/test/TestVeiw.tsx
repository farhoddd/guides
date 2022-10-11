import React, { FC, useEffect, useState } from "react";
import TestTitle from "./TestTitle";
import { useTest } from "./TestConext";
import styles from "./styles.module.scss";
import axios from "axios";
import { Datum } from "../../../types";
import Image from "next/image";
import Check from "../../../src/assets/check.svg";
import Red from "../../../src/assets/red.svg";

const TestVeiw: FC = () => {
	const authToken =
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGM3MzBiMWM2ODA1NmI0ZjgxNTgzYTk1MjE4MWYyY2FjMWFjODJmMjVkYTFmZWU1N2I1NTVlMjE5OGQzNjliMjU1YzlmODhiOWYwOGNjYTkiLCJpYXQiOjE2NTAxMzkzNTcuODI0NzU5LCJuYmYiOjE2NTAxMzkzNTcuODI0NzY1LCJleHAiOjE2ODE2NzUzNTcuNzk4MTY4OSwic3ViIjoiMTcyNCIsInNjb3BlcyI6W119.ZQULap3OpQKWJyFU2L9w5o8OwszUvNjgdgQDhCeeESth_gLZpgGrwTxPOA1i8tMW17BrmYSFpq8Fcanhbca6LJnhayVZ66uNhotxZqneTFBAT3fLlUZOkrSHwvwqPu_xnliX4U8IvdIAj4gUtMlOZJN6eqyb-zy_UmjzaTApZsSydS5tOYgHtKaknRMTrdHFdf5Ztb29Etax9Nk1AjwaRp1L3xQhqZHzZRio8-n7xIagcWz9sIHeFbS47VzvUrwzmeQ6hylUgqU6Vio9cBtL6cs_aZgboFu5ICLkKbAcGoATJukND99l49-ZhSdiTyWBSsIb05aKlYSO_fnojiWwUALkFc36ngsQdghNXf5n5rsHj0lg-yf9ERAPVM95b1Q2AO27XCmnxtM2pG4qOFCOeA8Bq4FygcGzfQwQc2DiwcDwCzNI-E-B3u6IhyEgjSKKIiLsO00ZQg7K4iiASkyeEiZFW9ofBto2Nq99B89Q6TZlzM_-GFlAaIQpBoTQTObMEiJgvRR86bz8AvVOs6XQRgnjsRzLdMhGRBVxEoWaV8BmlHe4sq6QkfFspwyRtWhridntsy1eZj6UZhbEDXTCBFXysEzX5eXfQP7uVz7AisyJu7m6mvssijyDGYh_yqJHaQko7YAfhR-Mt527U5CHexpY_KZywkyrm7JZujyK6Fw";

	const [testData, setTestData] = useState([]);
	useEffect(() => {
		const getRequest = async () => {
			try {
				const resp = await axios.get(
					"https://guide-backend.crocos.kz/api/v1/questions",
					{
						headers: {
							Authorization: `Bearer ${authToken}`,
						},
					}
				);
				console.log(resp.data.data);
				setTestData(resp.data.data);
			} catch (err) {
				// Handle Error Here
				console.error(err);
			}
		};

		getRequest();
	}, []);

	return (
		<div className={styles.testv}>
			<TestTitle>Ващи ответы на тестовые вопросы</TestTitle>
			<div>
				{testData.map(({ id, name, answers }) => {
					return (
						<div key={id} className={styles.testvAnswer}>
							<div className={styles.testvAnswerTitle}>{name}</div>

							{answers.map((i) => {
								return (
									<div key={i.id} className={styles.testvAnswerVariants}>
										<div className={styles.testvAnswerVariantsitem}>
											{i.correct === "1" && <Check />}
											{i.correct === "2" && <Red />}

											<span>{i.name}</span>
										</div>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TestVeiw;
