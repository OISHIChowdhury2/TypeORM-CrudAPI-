import express from 'express';
import { Banker } from '../entities/Banker';

const router = express.Router();

router.post('/api/banker', async (req, res) => {
	const {
		first_name,
		last_name,
		email,
		card_number,
		employeeNumber,
	} = req.body;

	const banker = Banker.create({
		first_name: first_name,
		last_name: last_name,
		 email,
		employee_number: employeeNumber,
	});

	await banker.save();

	return res.json(banker);
});

export { router as createBankerRouter };
