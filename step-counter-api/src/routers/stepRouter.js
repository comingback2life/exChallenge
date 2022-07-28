import express from 'express';
import { validateData } from '../middlewares/stepsValidator.js';
import {
	getRecordedSteps,
	recordSteps,
} from '../models/step-model/Steps.model.js';
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const result = await getRecordedSteps();
		result
			? res.json({
					status: 'success',
					message: 'Steps found',
					result,
			  })
			: res.json({
					status: 'error',
					message: 'Could not load steps, please try again later',
			  });
	} catch (error) {
		next(error);
	}
});

router.post('/', validateData, async (req, res, next) => {
	try {
		const result = await recordSteps(req.body);
		result?._id
			? res.json({
					status: 'success',
					message: 'Steps have been added to the database',
			  })
			: res.json({
					status: 'error',
					message: 'Please try again',
			  });
	} catch (error) {
		next(error);
	}
});

export default router;
