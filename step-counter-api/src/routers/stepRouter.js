import express from 'express';
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
