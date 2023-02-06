"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const db_config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "netwrix",
};
const pool = promise_1.default.createPool(db_config);
exports.default = pool;
