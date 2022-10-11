import React, { ReactEventHandler, useState } from "react";
import styles from "./styles.module.scss";
import TestTitle from "./TestTitle";
import TestProgress from "./TestProgress";
import TestQuestionContainer from "./TestQuestionContainer";
import TestControls from "./TestControls";
import { Datum } from "../../../types";
import TestButton from "./TestButton";
import Link from "next/link";
import { useEffect } from "react";
import { TestProvider, useTest } from "./TestConext";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../hooks-redux";
import { addAnswer, selectCount } from "../../../features/testSlice";
import TestVeiw from "./TestVeiw";
import TestSuccess from "./success/TestSuccess";
import TestFailure from "./failure/TestFailure";
import Button from "../../components/Form/Button/Button";

const TestContainer: React.FC<{ data: Datum }> = ({ data }) => {
	const { id, name, answers } = data;

	const [selectedAnswer, setSelectedAnswer] = useState<string>();
	const [pageState, setPageState] = useState<string>("main");
	const [butState, setBupState] = useState(false);

	const { testcorrect, trueAnswer, wrongAnswers, addAnswer, testList } =
		useTest();
	const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedAnswer(event.target.value);
		setBupState(false);
	};

	const page = Number(data.page);
	function n(correct: boolean) {
		if (correct) {
			addAnswer({
				questionName: name,
				answer: selectedAnswer,
				correct: true,
				questionOrder: page,
			});
			trueAnswer();
		} else {
			addAnswer({
				questionName: name,
				answer: selectedAnswer,
				correct: false,
				questionOrder: page,
			});
			wrongAnswers();
		}
	}
	const nextPage = page + 1;

	const prevPage = page - 1;
	const Router = useRouter();
	function prewP(event: React.MouseEvent<HTMLButtonElement>) {
		Router.push(`/test/${prevPage}`);
	}

	function testV() {
		setPageState("testveiw");
	}

	function nextP() {
		const index = answers.findIndex((answer) => answer.name == selectedAnswer);

		if (selectedAnswer && index >= 0) {
			const correct = answers[index].correct == "1";
			setBupState(false);
			if (page < 15) {
				n(correct);
				return Router.push(`/test/${nextPage}`);
			} else if (testcorrect.trueAnswer > 12) {
				n(correct);
				return setPageState("sucses");
			} else {
				n(correct);
				return setPageState("failure");
			}
		} else {
			setBupState(true);
			return Router.push("#");
		}
	}

	if (pageState == "main") {
		return (
			<div className={styles.test}>
				<div className={styles.testTop}>
					Бесплатно <span>5 вопросов</span>
				</div>
				<TestTitle>
					Основные правила проведения и подготовки экскурсий
				</TestTitle>
				<TestProgress
					currentQuestion={data.page}
					totalQuestions={15}
					earnedPoints={0}
					totalPoints={75}
				/>
				{/* TestQuestionContainer */}

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
				{butState == true && (
					<span className={styles.sp}>выберите один из варитов</span>
				)}
				<div className={styles.testControls}>
					<TestButton direction='prev' handle={prewP} />

					<TestButton direction='next' handle={nextP} />
				</div>
			</div>
		);
	} else if (pageState == "sucses") {
		return <TestSuccess />;
	} else if (pageState == "failure") {
		return (
			<div>
				<TestFailure />
			</div>
		);
	} else if (pageState == "testveiw") {
		<TestVeiw />;
	}
};

export default TestContainer;
