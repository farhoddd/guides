import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

type testType = {
	questionName: string | undefined;
	answer: string | undefined;
	correct: boolean;
	questionOrder: number;
};
const testList = {
	questionName: "",
	answer: "",
	correct: false,
	questionOrder: 0,
};
type testcorrectType = {
	tottalQuestions: number;
	trueAnswer: number;
	currentQuestion: number;
	wrongAnswers: number;
};
const testcorrect = {
	tottalQuestions: 15,
	currentQuestion: 0,
	trueAnswer: 0,
	wrongAnswers: 0,
};

type authContextType = {
	testcorrect: testcorrectType;
	trueAnswer: () => void;
	wrongAnswers: () => void;
	addAnswer: (testList: testType) => void;
	testList: [];
};
const authContextDefaultValues: authContextType = {
	testcorrect,
	trueAnswer: () => {},
	wrongAnswers: () => {},
	addAnswer: (testList: testType) => {},
	testList: [],
};
const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useTest() {
	return useContext(AuthContext);
}

type Props = {
	children: ReactNode;
};

export function TestProvider({ children }: Props) {
	const [state, setState] = useState(testcorrect);
	const [testState, setTestState] = useState(Array);
	const trueAnswer = () => {
		setState((state) => ({ ...state, trueAnswer: state.trueAnswer + 1 }));
	};
	const wrongAnswers = () =>
		setState((state) => ({ ...state, wrongAnswers: state.wrongAnswers + 1 }));
	const addAnswer = (testList: testType) => {
		setTestState((testState) => [...testState, testList]);
	};

	const value = {
		testcorrect: state,
		trueAnswer,
		wrongAnswers,
		testList: testState,
		addAnswer: addAnswer,
	};

	return (
		<>
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		</>
	);
}
