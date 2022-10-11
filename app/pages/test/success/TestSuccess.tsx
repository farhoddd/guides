import React from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/Form/Button/Button";
import { useTest } from "../TestConext";
import { useState } from "react";
import TestVeiw from "../TestVeiw";

type Props = {};

const TestSuccess: React.FC<Props> = () => {
	const { testcorrect, trueAnswer, wrongAnswers } = useTest();
	const t = testcorrect.trueAnswer;
	const [count, setCount] = useState("success");
	const handle = () => {
		setCount("test");
		console.log(count);
	};

	return (
		<>
			{count == "success " && (
				<div className={styles.success}>
					<div className={styles.successLeft}>
						<div className={styles.successLeftTitle}>
							Поздравляем, вы прошли тест!
						</div>
						<div className={styles.successLeftDescription}>
							Вы набрали более 80% (75 баллов)
						</div>
						<div className={styles.successLeftControls}>
							<Button
								onClick={handle}
								className={styles.successLeftControlsButton}
							>
								Посмотреть тест
							</Button>
						</div>
					</div>
					<div className={styles.successRight}>
						<img src='/img/test/success_banner.png' alt='' />
					</div>
				</div>
			)}

			{count === "test" && <TestVeiw />}
		</>
	);
};

export default TestSuccess;
