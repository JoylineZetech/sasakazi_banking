const { Pool } = require('pg');

const pool = new Pool({
  user: 'softwares',
  password: 'software',
  host: 'localhost',
  port: 5432,
  database: 'sasakazi'
});
const getClient = async () => {
  try {
    const client = await pool.connect();
    return client;
  } catch (error) {
    return null;
  }
};
module.exports = { pool,getClient };