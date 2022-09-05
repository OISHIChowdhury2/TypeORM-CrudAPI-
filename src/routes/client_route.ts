import express from 'express';
import { Client } from '../entities/Client';

const router = express.Router();

router.post('/api/client', async (req, res) => {
	console.log(req.body)
	const {
		first_name,
		last_name,
		email,
		balance,
	} = req.body;

	const client = Client.create({
		first_name: first_name,
		last_name: last_name,
		email,
		balance,
	});

	await client.save();

    res.json(client);
});

export { router as createClientRouter };
