import mongoose from 'mongoose';

const stepSchema = new mongoose.Schema({
	dateOfStep: {
		type: String,
		required: true,
		default: '',
	},
	stepsTaken: {
		type: Number,
		required: true,
		default: '',
	},
});

export default mongoose.model('step', stepSchema);
