"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./router");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/uploads', express_1.default.static(node_path_1.default.resolve(__dirname, '..', 'uploads')));
app.use(router_1.router);
const PORT = process.env.PORT;
mongoose_1.default.connect('mongodb://localhost:27017')
    .then(() => console.log('COnectado ao DB'))
    .catch((err) => console.log('Erro ao conectar:', err));
app.listen(PORT, () => {
    console.log(`Server in running on ${PORT}`);
});
