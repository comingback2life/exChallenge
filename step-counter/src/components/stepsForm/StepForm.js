import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './StepForm.css';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { addStepsData, getStepData } from './StepFormAction';

export const StepForm = () => {
	const [form, setForm] = useState({});
	const dispatch = useDispatch();
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		if (name === 'dateOfStep') {
			form.dateOfStep = dayjs(value).format('DD-MMM-YYYY');
		}
		setForm({
			...form,
			[name]: value,
		});
		console.log(form, 'hoc');
	};
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		dispatch(addStepsData(form)) && dispatch(getStepData());
		console.log(form);
	};
	return (
		<Container className="px-4">
			<div className="hasSubmitForm">
				<hr className="isHR mb-2 mt-2" />
				<Form className="isSubmitForm p-4" onSubmit={handleOnSubmit}>
					<Row className="g-3">
						<Col sm={12} md={3}>
							<input
								type="Date"
								name="dateOfStep"
								className="isTextBox p-4"
								onChange={handleOnChange}
								required
							></input>
						</Col>
						<Col sm={12} md={9} className="d-flex justify-content-end isCol">
							<input
								type="text"
								name="stepsTaken"
								className="isTextBox p-4 "
								onChange={handleOnChange}
								required
							></input>
							<Button type="submit" className="mx-2 isSubmitButton">
								Submit
							</Button>
						</Col>
						<hr className="isHR mt-3" />
					</Row>
				</Form>
			</div>
		</Container>
	);
};
