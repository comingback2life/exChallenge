import React from 'react';
import './HomeComp.css';
import { Container, Row, Col } from 'react-bootstrap';
import { StepForm } from '../stepsForm/StepForm';
import { StepsTable } from '../stepsForm/StepsTable';
export const HomeComp = () => {
	return (
		<Container>
			<Row>
				<div className="wrapper">
					<div className="isMidBox">
						<div className="text-start">
							<h6 className="isTitle p-2 m-3">Steptober Challenge</h6>
							<div className="isName mt-4 px-4">Samip Pokharel</div>
							<label className="isLabel mt-4 px-4">My steps</label>
						</div>
						<StepForm />
						<StepsTable />
					</div>
				</div>
			</Row>
		</Container>
	);
};
