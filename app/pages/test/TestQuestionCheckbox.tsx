import React from "react";
import styles from "./styles.module.scss";

type Props = {
	optionName: string | undefined;
};

const TestQuestionCheckbox: React.FC<Props> = ({ optionName }) => {
	return (
		<div className={styles.testQuestionOption}>
			<input type='checkbox' />
			<label htmlFor='checkbox'>{optionName}</label>
		</div>
	);
};

export default TestQuestionCheckbox;
