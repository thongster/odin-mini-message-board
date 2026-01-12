#! /usr/bin/env node

const { Client } = require('pg');

// allow use of .env
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT NOT NULL,
  username VARCHAR(255) NOT NULL,
  added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username, added)
VALUES
(
  'Just hit level 30 and finally became a Cleric! Time to grind zombie mushrooms.',
  'OGcleric',
  CURRENT_TIMESTAMP
),
(
  'Anyone Zakum tonight? Need a helm for my Dexless Sin.',
  'xOPsinx',
  CURRENT_TIMESTAMP
),
(
  'Spent 2 hours at Henesys Hunting Ground ks''ing noobs and loved every minute of it. Classic Maple.',
  'IlikeArrow',
  CURRENT_TIMESTAMP
),
(
  'Anybody want to start a guild? We''ll be super active for 4 weeks and then never log on again',
  'Soupd',
  CURRENT_TIMESTAMP
);
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
