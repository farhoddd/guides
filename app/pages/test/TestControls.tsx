import React from "react";
import styles from "./styles.module.scss";
import TestButton from "./TestButton";

const TestControls: React.FC = () => {
	return (
		<div className={styles.testControls}>
			{/* <TestButton direction="prev"/> */}
			{/* <TestButton direction="next"/> */}
		</div>
	);
};

export default TestControls;
