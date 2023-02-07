import express from "express";
import pool from "../../config/db_config";
const router = express.Router();

router.post("/", (req, res) => {
  pool
    .query(
      "SELECT * FROM partner_locator WHERE company LIKE ? OR address LIKE ?",
      [req.body.searchValue, req.body.searchValue]
    )
    .then((result) => {
      res.status(200).json(result[0]);
    });
});

module.exports = router;
