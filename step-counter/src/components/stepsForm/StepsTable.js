import React from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './StepForm.css';
export const StepsTable = () => {
	return (
		<Container>
			<Table variant="none" className="isBordered">
				{/**Since I am only using one style for the table isBordered class can be found in the StepForm.css */}
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	);
};
