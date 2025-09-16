import { Pool } from 'pg';

export const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  port: +(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'appdb',
});

export const initDb = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      message TEXT NOT NULL
    );
  `);
  console.log('messages table created');
};
