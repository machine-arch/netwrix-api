"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = __importDefault(require("../../config/db_config"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    db_config_1.default.query("SELECT * FROM partner_locator").then((result) => {
        res.status(200).json(result[0]);
    });
});
module.exports = router;
