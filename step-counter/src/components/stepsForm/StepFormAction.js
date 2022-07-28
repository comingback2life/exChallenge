import { fetchSteps, addSteps } from '../helpers/axiosHelper';
import { toast } from 'react-toastify';
import { setStepData } from './StepFormSlice';
export const getStepData = () => async (dispatch) => {
	const getSteps = fetchSteps();
	toast.promise(getSteps, {
		pending: 'Please wait...',
	});
	const data = await getSteps;
	data.result.totalSteps = data.totalSteps; //attaching totalSteps to the result being passed arround
	dispatch(setStepData(data.result));
};

export const addStepsData = (dataObj) => async (dispatch) => {
	console.log(dataObj);
	const addDataPromise = addSteps(dataObj);
	toast.promise(addDataPromise, {
		pending: 'Please wait...',
	});
	const { status, message } = await addDataPromise;
	toast[status](message);
};
