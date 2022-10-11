import React from "react";
import styles from "./styles.module.scss";

import { useTest } from "./TestConext";

type Props = {
	currentQuestion: number;
	totalQuestions: number;
	earnedPoints: number;
	totalPoints: number;
};

const TestProgress: React.FC<Props> = ({
	currentQuestion,
	totalQuestions,
	earnedPoints,
	totalPoints,
}) => {
	const progresss = String((currentQuestion / totalQuestions) * 100) + "%";

	const { testcorrect, trueAnswer, wrongAnswers } = useTest();
	const t = testcorrect.trueAnswer;
	return (
		<div className={styles.testProgress}>
			{/* <div className={styles.testProgressQuestions}>Список вопросов</div> */}
			<div className={styles.testProgressIndicator}>
				<div className={styles.testProgressIndicatorProgress}>
					{currentQuestion} из {totalQuestions}
				</div>
				<div className={styles.testProgressIndicatorBar}>
					<div
						className={styles.testProgressIndicatorBarPercentage}
						style={{
							width: `${progresss}`,
						}}
					/>
				</div>
			</div>
			{/* <div className={styles.testProgressResult}>
				<span> столиц стран мира</span>
			</div> */}
		</div>
	);
};

export default TestProgress;
