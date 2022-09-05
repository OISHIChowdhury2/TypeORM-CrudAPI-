"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.TransactionType = void 0;
const typeorm_1 = require("typeorm");
const Client_1 = require("./Client");
var TransactionType;
(function (TransactionType) {
    TransactionType["DEPOSIT"] = "deposit";
    TransactionType["WITHDRAW"] = "withdraw";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
let Transaction = class Transaction extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({}),
    __metadata("design:type", String)
], Transaction.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({
        type: 'numeric',
    }),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Client_1.Client, (client) => client.transactions, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({
        name: 'client_id',
    }),
    __metadata("design:type", Client_1.Client)
], Transaction.prototype, "client", void 0);
Transaction = __decorate([
    typeorm_1.Entity('transaction')
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map