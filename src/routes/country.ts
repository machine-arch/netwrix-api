import express from "express";
import pool from "../../config/db_config";
const router = express.Router();

router.get("/", (req, res) => {
  //open and clos pool
  pool.query("SELECT * FROM loc_country").then((result) => {
    res.status(200).json(result[0]);
  });
  pool.end();
});

module.exports = router;
