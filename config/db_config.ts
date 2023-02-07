import mysql2 from "mysql2/promise";
import { dbConfig } from "interfaces/db.interface";

const db_config: dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

console.log(process.env.DB_HOST);

const pool = mysql2.createPool(db_config);

export default pool;
