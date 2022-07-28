import axios from 'axios';
import dayjs from 'dayjs';
import { useState } from 'react';
const stepEP = process.env.REACT_APP_STEP_EP;

export const fetchSteps = async () => {
	const dates = [];
	let totalSteps = 0;
	const { data } = await axios.get(stepEP);
	const { result } = data;
	for (let i in result) {
		totalSteps = totalSteps + result[i].stepsTaken;
		dates.push(result[i].dateOfStep);
	}
	//(a, b) => (dayjs(a).isAfter(dayjs(b)) ? 1 : -1)
	const sortedByDate = result.sort((a, b) =>
		dayjs(a.dateOfStep).isAfter(dayjs(b.dateOfStep)) ? 1 : -1
	);
	data.result = sortedByDate.reverse();
	console.log(data.result, 'afterSorting');
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
