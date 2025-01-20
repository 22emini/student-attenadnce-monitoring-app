// drizzle.config.js
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './utils/schema.js',  // Adjust this path to where your schema file actually is
  out: './drizzle',
  dialect: 'mysql',
  dbCredentials: {
    host: 'srv1787.hstgr.io',
    user: 'u769274613_attendancetrak',
    database: 'u769274613_attendancetrak',
    password: '200613Ak',
    port: 3306
  }
});