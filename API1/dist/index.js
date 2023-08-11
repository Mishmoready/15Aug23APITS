"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server = (0, express_1.default)();
const port = process.env.PORT;
server.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});