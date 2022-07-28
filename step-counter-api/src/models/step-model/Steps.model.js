import StepSchema from './Steps.schema.js';

export const getRecordedSteps = () => {
	return StepSchema.find();
};
export const recordSteps = (dataObj) => {
	return StepSchema(dataObj).save();
};
