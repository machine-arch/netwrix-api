"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = __importDefault(require("../../config/db_config"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    const { Type, Country, State } = req.body;
    const onleyType = Type && !Country && !State;
    const onleyCountry = !Type && Country && !State;
    const onleyState = !Type && !Country && State;
    const typeCountry = Type && Country && !State;
    const typeState = Type && !Country && State;
    const countryState = !Type && Country && State;
    const typeCountryState = Type && Country && State;
    if (onleyType) {
        db_config_1.default
            .query("SELECT * FROM partner_locator WHERE status = ?", [Type])
            .then((result) => {
            res.status(200).json(result[0]);
        });
    }
    else if (onleyCountry) {
        db_config_1.default
            .query("SELECT * FROM partner_locator WHERE countries_covered REGEXP ?", [
            Country,
        ])
            .then((result) => {
            if (result[0].length === 0) {
                res.status(200).json(result[0]);
            }
            else {
                res.status(200).json(result[0]);
            }
        });
    }
    else if (onleyState) {
        db_config_1.default
            .query("SELECT * FROM partner_locator WHERE states_covered REGEXP ?", [
            State,
        ])
            .then((result) => {
            if (result[0].length === 0) {
                res.status(200).json(result[0]);
            }
            else {
                res.status(200).json(result[0]);
            }
        });
    }
    else if (typeCountry) {
        db_config_1.default
            .query("SELECT * FROM partner_locator WHERE status = ? AND countries_covered REGEXP ?", [Type, Country])
            .then((result) => {
            if (result[0].length === 0) {
                res.status(200).json(result[0]);
            }
            else {
                res.status(200).json(result[0]);
            }
        });
    }
    else if (typeState) {
        db_config_1.default
            .query("SELECT * FROM partner_locator WHERE status = ? AND states_covered REGEXP ?", [Type, State])
            .then((result) => {
            if (result[0].length === 0) {
                res.status(200).json(result[0]);
            }
            else {
                res.status(200).json(result[0]);
            }
        });
    }
    else if (countryState) {
        db_config_1.default
            .query("SELECT * FROM partner_locator WHERE countries_covered REGEXP ? AND states_covered REGEXP ?", [Country, State])
            .then((result) => {
            if (result[0].length === 0) {
                res.status(200).json(result[0]);
            }
            else {
                res.status(200).json(result[0]);
            }
        });
    }
    else if (typeCountryState) {
        db_config_1.default
            .query("SELECT * FROM partner_locator WHERE status = ? AND countries_covered REGEXP ? AND states_covered REGEXP ?", [Type, Country, State])
            .then((result) => {
            if (result[0].length === 0) {
                res.status(200).json(result[0]);
            }
            else {
                res.status(200).json(result[0]);
            }
        });
    }
});
module.exports = router;
