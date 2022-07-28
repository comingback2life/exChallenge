import Joi from 'joi';

export const validateData = (req, res, next) => {
	const schema = Joi.object({
		dateOfStep: Joi.string().required(),
		stepsTaken: Joi.number().max(100).min(1),
	});
	const { value, error } = schema.validate(req.body);
	if (error) {
		error.status = 200;
		return next(error);
	}

	next();
};
