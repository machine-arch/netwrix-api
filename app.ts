import express from "express";
import cors from "cors";

const bodyParser = require("body-parser");

const app = express();

const country = require("./src/routes/country");
const state = require("./src/routes/state");
const partners = require("./src/routes/partners");
const search = require("./src/routes/search_partners");
const searchBy = require("./src/routes/search_partners_by");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/loc_country", country);
app.use("/api/loc_state", state);
app.use("/api/partner_locator", partners);
app.use("/api/partner_locator/search", search);
app.use("/api/partner_locator/search/by", searchBy);

export default app;
