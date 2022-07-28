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
						<td className="p-3">1</td>
						<td className="p-3">Mark</td>
						<td className="p-3">Otto</td>
						<td className="p-3">@mdo</td>
					</tr>
					<tr>
						<td className="p-3">1</td>
						<td className="p-3">Mark</td>
						<td className="p-3">Otto</td>
						<td className="p-3">@mdo</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	);
};
