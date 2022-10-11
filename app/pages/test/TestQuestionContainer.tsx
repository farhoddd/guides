import React, { useState } from "react";
import styles from "./styles.module.scss";
import TestQuestionCheckbox from "./TestQuestionCheckbox";
import { Datum } from "../../../types";
import { string } from "yup";
import { useTest } from "./TestConext";

const TestQuestionContainer: React.FC<{ data: Datum }> = ({ data }) => {
	const { id, name, answers } = data;
	const [selectedAnswer, setSelectedAnswer] = useState<String>();
	const { testcorrect, trueAnswer, wrongAnswers } = useTest();

	const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		sendAnswer();
	};
	return (
		<div className={styles.testQuestion}>
			<div className={styles.testQuestionTitle}>{name}</div>
			{answers?.map(({ id, name }) => {
				return (
					<div key={id}>
						<div className={styles.testQuestionOption}>
							<input
								type='radio'
								name='answer'
								value={name}
								id={id}
								onChange={radioHandler}
							/>
							<label htmlFor='checkbox'>{name}</label>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TestQuestionContainer;
