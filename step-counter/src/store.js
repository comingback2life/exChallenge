import { configureStore } from '@reduxjs/toolkit';
import stepSlice from './components/stepsForm/StepFormSlice';

const store = configureStore({
	reducer: {
		steps: stepSlice,
	},
});

export default store;
