import 'dotenv/config';
import express from 'express';
import { connectDB } from './src/config/dbConfig.js';
import stepRouter from './src/routers/stepRouter.js';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';

const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 8000;

connectDB(); //connect to the database

app.use(express.static(path.resolve(__dirname, 'step-counter', 'build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

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

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'step-counter', 'build', 'index.html'));
});
app.listen(PORT, (req, res) => {
	console.log(`Server runing on PORT ${PORT} `);
});
