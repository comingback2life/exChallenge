import StepSchema from './Steps.schema.js';

export const recordSteps = (dataObj) => {
	return StepSchema(dataObj).save();
};
