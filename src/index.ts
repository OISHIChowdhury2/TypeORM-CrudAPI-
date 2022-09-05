import { createConnection } from 'typeorm';
import express from 'express';
import { Client } from './entities/Client';
import { Banker } from './entities/Banker';
import { Transaction } from './entities/Transaction';
import { createClientRouter } from './routes/client_route';
import { createBankerRouter } from './routes/banker_route';
import { connectBankerToClientRouter } from './routes/banker_to_client_route';
import { createTransactionRouter } from './routes/transaction_route';
import { deleteClientRouter } from './routes/delete_client_route';
import { fetchClientsRouter } from './routes/fetch_clients_route';

const app = express();

const main = async () => {
	try {
		await createConnection({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'oishi',
			password: 'test',
			database: 'asia',
			entities: [Client,Banker,Transaction],
			synchronize: true,
		});
		console.log('Connected to Postgres');

		app.use(express.json());

		app.use(createClientRouter);
		app.use(createBankerRouter);
		app.use(connectBankerToClientRouter);
		app.use(createTransactionRouter);
		app.use(deleteClientRouter);
		app.use(fetchClientsRouter);

		app.listen(8080, () => {
			console.log('Now running on port 8080');
		});
	} catch (error) {
		console.error(error);
		throw new Error('Unable to connect to db');
	}
};

main();
