"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const Client_1 = require("./entities/Client");
const Banker_1 = require("./entities/Banker");
const Transaction_1 = require("./entities/Transaction");
const client_route_1 = require("./routes/client_route");
const banker_route_1 = require("./routes/banker_route");
const banker_to_client_route_1 = require("./routes/banker_to_client_route");
const transaction_route_1 = require("./routes/transaction_route");
const delete_client_route_1 = require("./routes/delete_client_route");
const fetch_clients_route_1 = require("./routes/fetch_clients_route");
const app = express_1.default();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield typeorm_1.createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'oishi',
            password: 'test',
            database: 'asia',
            entities: [Client_1.Client, Banker_1.Banker, Transaction_1.Transaction],
            synchronize: true,
        });
        console.log('Connected to Postgres');
        app.use(express_1.default.json());
        app.use(client_route_1.createClientRouter);
        app.use(banker_route_1.createBankerRouter);
        app.use(banker_to_client_route_1.connectBankerToClientRouter);
        app.use(transaction_route_1.createTransactionRouter);
        app.use(delete_client_route_1.deleteClientRouter);
        app.use(fetch_clients_route_1.fetchClientsRouter);
        app.listen(8080, () => {
            console.log('Now running on port 8080');
        });
    }
    catch (error) {
        console.error(error);
        throw new Error('Unable to connect to db');
    }
});
main();
//# sourceMappingURL=index.js.map