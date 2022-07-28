import React from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './StepForm.css';
export const StepsTable = () => {
	return (
		<Container>
			<Table variant="none" className="isBordered" responsive>
				{/**Since I am only using one style for the table isBordered class can be found in the StepForm.css */}
				<tbody>
					<tr>
						<td className="py-3">1</td>
						<td className="py-3 text-start" colSpan={3}>
							Date
						</td>
						<td className="py-3 text-end">Stepstaken</td>
					</tr>
					<tr>
						<td className="py-3">1</td>
						<td className="py-3 text-start">Date</td>
						<td className="py-3 text-end" colSpan={5}>
							Stepstaken
						</td>
					</tr>
				</tbody>
			</Table>
			<div className="d-flex justify-content-between">
				<p className="px-5"> Total</p>
				<p className="px-4"> 10</p>
			</div>
		</Container>
	);
};
