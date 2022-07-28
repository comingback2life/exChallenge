import axios from 'axios';
import dayjs from 'dayjs';
import { useState } from 'react';
const stepEP =
	process.env.NODE_ENV === 'production'
		? '/api/v1/steps'
		: 'http://localhost:8000/api/v1/steps';

export const fetchSteps = async () => {
	let totalSteps = 0;
	const { data } = await axios.get(stepEP);
	const { result } = data;
	for (let i in result) {
		totalSteps = totalSteps + result[i].stepsTaken;
	}
	//(a, b) => (dayjs(a).isAfter(dayjs(b)) ? 1 : -1)
	const sortedByDate = result.sort((a, b) =>
		dayjs(a.dateOfStep).isAfter(dayjs(b.dateOfStep)) ? 1 : -1
	);
	data.result = sortedByDate.reverse();

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
