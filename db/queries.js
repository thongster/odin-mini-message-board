const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function getMessageByID(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = ($1)', [
    id,
  ]);
  return rows;
}

module.exports = { getAllMessages, getMessageByID };
