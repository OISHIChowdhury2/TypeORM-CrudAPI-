import {Entity,Column,OneToMany,ManyToMany} from 'typeorm';
import { Banker } from './Banker';
import { Transaction } from './Transaction';
import { Person } from './utils/Person';

@Entity('client')
export class Client extends Person {
	@Column()
	balance: number;

	@Column()
	card_number: string;

	@ManyToMany((type) => Banker, {
		cascade: true,
	})
	bankers: Banker[];

	@OneToMany(
		() => Transaction,
		(transaction) => transaction.client
	)
	transactions: Transaction[];
}
