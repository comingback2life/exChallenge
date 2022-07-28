import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './StepForm.css';
export const StepForm = () => {
	return (
		<Container className="px-4">
			<div className="hasSubmitForm">
				<hr className="isHR mb-2 mt-2" />
				<Form className="isSubmitForm p-4">
					<Row className="g-3">
						<Col sm={12} md={3}>
							<input type="Date" className="isTextBox p-4"></input>
						</Col>
						<Col sm={12} md={9} className="d-flex justify-content-end isCol">
							<input type="text" className="isTextBox p-4 "></input>
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
