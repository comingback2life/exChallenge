import 'dotenv/config';
import express from 'express';
import { connectDB } from './src/config/dbConfig.js';
import stepRouter from './src/routers/stepRouter.js';
const app = express();

const PORT = process.env.PORT;

connectDB(); //connect to the database

app.use(express.json());

app.use('/api/v1/steps', stepRouter);

//app error handling
app.use((err, req, res, next) => {
	console.log(err);
	res.status(err.status || 400);
	//log the error in file system of time series DB like cloudWatch
	res.json({
		status: 'error',
		message: err.message,
	});
});

app.listen(PORT, (req, res) => {
	console.log(`Server runing on PORT ${PORT} `);
});