import axios from 'axios';
const stepEP = process.env.REACT_APP_STEP_EP;

export const fetchSteps = async () => {
	const { data } = await axios.get(stepEP);
	return data;
};

export const addSteps = async (dataObj) => {
	const { data } = await axios.post(stepEP, dataObj);
	return data;
};
