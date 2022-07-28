import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	stepsData: [],
};
const stepSlice = createSlice({
	name: 'stepSlice',
	initialState,
	reducers: {
		setStepData: (state, { payload }) => {
			state.stepsData = payload;
		},
	},
});
const { reducer, actions } = stepSlice;
export const { setStepData } = actions;
export default reducer;
