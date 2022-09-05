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
exports.Banker = void 0;
const typeorm_1 = require("typeorm");
const Client_1 = require("./Client");
const Person_1 = require("./utils/Person");
let Banker = class Banker extends Person_1.Person {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Banker.prototype, "employee_number", void 0);
__decorate([
    typeorm_1.ManyToMany((type) => Client_1.Client, {
        cascade: true,
    }),
    typeorm_1.JoinTable({
        name: 'bankers_clients',
        joinColumn: {
            name: 'banker',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'client',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], Banker.prototype, "clients", void 0);
Banker = __decorate([
    typeorm_1.Entity('banker')
], Banker);
exports.Banker = Banker;
//# sourceMappingURL=Banker.js.map