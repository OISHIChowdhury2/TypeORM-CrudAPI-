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
exports.Client = void 0;
const typeorm_1 = require("typeorm");
const Banker_1 = require("./Banker");
const Transaction_1 = require("./Transaction");
const Person_1 = require("./utils/Person");
let Client = class Client extends Person_1.Person {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Client.prototype, "balance", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "card_number", void 0);
__decorate([
    typeorm_1.ManyToMany((type) => Banker_1.Banker, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Client.prototype, "bankers", void 0);
__decorate([
    typeorm_1.OneToMany(() => Transaction_1.Transaction, (transaction) => transaction.client),
    __metadata("design:type", Array)
], Client.prototype, "transactions", void 0);
Client = __decorate([
    typeorm_1.Entity('client')
], Client);
exports.Client = Client;
//# sourceMappingURL=Client.js.map