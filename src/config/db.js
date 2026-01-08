import fs from "fs";
import pg from "pg";

const { Client } = pg;

const config = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  ssl: process.env.PG_CA_CERT
    ? {
        rejectUnauthorized: true,
        ca: process.env.PG_CA_CERT,
      }
    : false,
};

const client = new Client(config);

async function checkPostgresVersion() {
  try {
    await client.connect();
    const res = await client.query("SELECT VERSION()");
    console.log(res.rows[0].version);
  } catch (err) {
    console.error("Error connecting to PostgreSQL:", err);
  } finally {
    await client.end();
  }
}

// Run the function
checkPostgresVersion();

export default client;
