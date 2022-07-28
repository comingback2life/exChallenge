import mongoose from 'mongoose';

export const connectDB = () => {
	try {
		const connectionString = mongoose.connect(
			'mongodb://localhost:27017/exCoStepCounter'
		);
		if (connectionString) {
			console.log('Connected to database successfully');
		}
	} catch (error) {
		console.log(error);
	}
};
