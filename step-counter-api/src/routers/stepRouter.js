import express from 'express';
import { recordSteps } from '../models/step-model/Steps.model.js';
const router = express.Router();

router.get('/', (req, res, next) => {
	try {
		console.log('Get Route');
		res.json({
			status: 'success',
			message: 'You have reached the GET Route',
		});
	} catch (error) {
		next(error);
	}
});
router.post('/', async (req, res, next) => {
	try {
		const result = await recordSteps(req.body);
		result?._id
			? res.send({
					status: 'success',
					message: 'Steps have been added to the database',
			  })
			: res.send({
					status: 'success',
					message: 'Steps could not be added to the database',
			  });
	} catch (error) {
		next(error);
	}
});

export default router;
