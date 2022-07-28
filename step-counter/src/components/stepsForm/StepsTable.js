import React, { useEffect, useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './StepForm.css';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { getStepData } from './StepFormAction';
export const StepsTable = () => {
	const [totalSteps, setTotalSteps] = useState([]);
	const { stepsData } = useSelector((state) => state.steps);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getStepData());
	}, []);

	return (
		<Container>
			{!stepsData.length && <Alert variant="warning">No Data Found</Alert>}
			<Table variant="none" className="isBordered" responsive>
				<tbody>
					{/**Since I am only using one style for the table isBordered class can be found in the StepForm.css */}
					{stepsData.length
						? stepsData.map((item, i) => {
								return (
									<tr key={item + i}>
										<td className="py-3">{i + 1}</td>
										<td className="py-3 text-start" colSpan={3}>
											{dayjs(item.dateOfStep).format('DD-MMM-YYYY')}
										</td>
										<td className="py-3 text-end">{item.stepsTaken}</td>
									</tr>
								);
						  })
						: null}
				</tbody>
			</Table>
			<div className="d-flex justify-content-between">
				<p className="px-5">Total</p>
				<p className="px-4">{stepsData.totalSteps}</p>
			</div>
		</Container>
	);
};
