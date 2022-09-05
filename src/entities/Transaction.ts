import {Entity,Column,PrimaryGeneratedColumn,
	ManyToOne,JoinColumn,BaseEntity,
} from 'typeorm';
import { Client } from './Client';

export enum TransactionType {
	DEPOSIT = 'deposit',
	WITHDRAW = 'withdraw',
}

@Entity('transaction')
export class Transaction extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({})
	type: string;

	@Column({
		type: 'numeric',
	})
	amount: number;

	@ManyToOne(
		() => Client,
		(client) => client.transactions,
		{
			onDelete: 'CASCADE',
		}
	)
	@JoinColumn({
		name: 'client_id',
	})
	client: Client;

}
