import React from "react";
import styles from "./styles.module.scss";
import ArrowLeft from "../../icons/ArrowLeft";
import classNames from "classnames";

type Props = {
	direction: "prev" | "next";
	handle: React.MouseEventHandler<HTMLButtonElement>;
};

const TestButton: React.FC<Props> = ({ direction, handle }) => {
	return (
		<button
			onClick={handle}
			className={classNames(
				styles.testButton,
				direction === "next" && styles.testButtonNext
			)}
		>
			{direction === "prev" && (
				<>
					<ArrowLeft /> Предыдущий вопрос
				</>
			)}
			{direction === "next" && (
				<>
					Следующий вопрос <ArrowLeft />
				</>
			)}
		</button>
	);
};

export default TestButton;
