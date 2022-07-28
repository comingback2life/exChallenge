import axios from 'axios';
import dayjs from 'dayjs';
const stepEP = process.env.REACT_APP_STEP_EP;

export const fetchSteps = async () => {
	let totalSteps = 0;
	const { data } = await axios.get(stepEP);
	const { result } = data;
	for (let i in result) {
		totalSteps = totalSteps + result[i].stepsTaken;
	}
	//result.sort((a, b) => dayjs(a).isAfter(b))

	console.log(result);
	const newDataObj = {
		...data,
		totalSteps,
	};
	return newDataObj;
};

export const addSteps = async (dataObj) => {
	const { data } = await axios.post(stepEP, dataObj);
	return data;
};
