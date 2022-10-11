import React from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/Form/Button/Button";
import { useTest } from "../TestConext";
import Link from "next/link";
import { useState } from "react";
import TestVeiw from "../TestVeiw";

type Props = {};

const TestFailure: React.FC<Props> = () => {
	const { testcorrect, trueAnswer, wrongAnswers } = useTest();
	const [count, setCount] = useState("failure");
	const t = testcorrect.trueAnswer;
	const handle = () => {
		setCount("test");
		console.log(count);
	};

	return (
		<>
			{count == "failure" && (
				<div className={styles.failure}>
					<div className={styles.failureLeft}>
						<div className={styles.failureLeftTitle}>Вы не прошли тест</div>
						<div className={styles.failureLeftStatus}>
							Вы набрали менее 80% (75 баллов)
						</div>
						<div className={styles.failureLeftDescription}>
							Проходной балл 80% (60 баллов)
						</div>
						<div className={styles.failureLeftControls}>
							<Button
								onClick={handle}
								className={styles.failureLeftControlsButton}
							>
								Посмотреть тест
							</Button>
							<Link href={`/test/1`}>
								<a>
									<Button className={styles.failureLeftControlsButton}>
										Повторить тест
									</Button>
								</a>
							</Link>
						</div>
					</div>
					<div className={styles.failureRight}>
						<img src='/img/test/failure_banner.png' />
					</div>
				</div>
			)}

			{count === "test" && <TestVeiw />}
		</>
	);
};

export default TestFailure;
