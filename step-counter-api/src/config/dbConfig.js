import mongoose from 'mongoose';

export const connectDB = () => {
	try {
		const connect = mongoose.connect(process.env.CONNECTION_STRING);
		connect && console.log('Database has been connected');
	} catch (error) {
		console.log(error);
	}
};
