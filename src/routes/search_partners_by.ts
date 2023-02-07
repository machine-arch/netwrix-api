import express from "express";
import pool from "../../config/db_config";
const router = express.Router();

router.post("/", (req: any, res: any) => {
  const { Type, Country, State } = req.body;
  const onleyType = Type && !Country && !State;
  const onleyCountry = !Type && Country && !State;
  const onleyState = !Type && !Country && State;
  const typeCountry = Type && Country && !State;
  const typeState = Type && !Country && State;
  const countryState = !Type && Country && State;
  const typeCountryState = Type && Country && State;
  const noOne = !Type && !Country && !State;

  if (onleyType) {
    pool
      .query("SELECT * FROM partner_locator WHERE status = ?", [Type])
      .then((result) => {
        res.status(200).json(result[0]);
      });
  } else if (onleyCountry) {
    pool
      .query("SELECT * FROM partner_locator WHERE countries_covered REGEXP ?", [
        Country,
      ])
      .then((result: any) => {
        res.status(200).json(result[0]);
      });
  } else if (onleyState) {
    pool
      .query("SELECT * FROM partner_locator WHERE states_covered REGEXP ?", [
        State,
      ])
      .then((result: any) => {
        res.status(200).json(result[0]);
      });
  } else if (typeCountry) {
    pool
      .query(
        "SELECT * FROM partner_locator WHERE status = ? AND countries_covered REGEXP ?",
        [Type, Country]
      )
      .then((result: any) => {
        res.status(200).json(result[0]);
      });
  } else if (typeState) {
    pool
      .query(
        "SELECT * FROM partner_locator WHERE status = ? AND states_covered REGEXP ?",
        [Type, State]
      )
      .then((result: any) => {
        res.status(200).json(result[0]);
      });
  } else if (countryState) {
    pool
      .query(
        "SELECT * FROM partner_locator WHERE countries_covered REGEXP ? AND states_covered REGEXP ?",
        [Country, State]
      )
      .then((result: any) => {
        res.status(200).json(result[0]);
      });
  } else if (typeCountryState) {
    pool
      .query(
        "SELECT * FROM partner_locator WHERE status = ? AND countries_covered REGEXP ? AND states_covered REGEXP ?",
        [Type, Country, State]
      )
      .then((result: any) => {
        res.status(200).json(result[0]);
      });
  } else if (noOne) {
    pool.query("SELECT * FROM partner_locator").then((result) => {
      res.status(200).json(result[0]);
    });
  }
});

module.exports = router;
