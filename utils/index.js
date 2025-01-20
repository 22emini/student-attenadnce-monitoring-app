import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createPool({
  host: "srv1787.hstgr.io",
  user: "u769274613_attendancetrak",
  database: "u769274613_attendancetrak",
  password: "200613Ak",
  port: 3306,
});

export const db = drizzle(connection);