import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// declaring the types for our state
export type Answers = {
	page: number;
	quection: string | undefined;
	answer: string;
	correct: boolean;
};

const initialState: [] = [];

export const testSlice = createSlice({
	name: "test",
	initialState,

	reducers: {
		addAnswer: (state, action: PayloadAction<Answers>) => {
			const answer: Answers = {
				page: action.payload.page,
				quection: action.payload.quection,
				answer: action.payload.answer,
				correct: action.payload.correct,
			};
			state.push(answer);
		},
	},
});

export const { addAnswer } = testSlice.actions;

export const selectCount = (state: RootState) => state.test;

export default testSlice.reducer;
