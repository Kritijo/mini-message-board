require("dotenv").config();
const isProduction = process.env.NODE_ENV === "production";

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMP DEFAULT NOW()
);

INSERT INTO messages (username, text) 
VALUES (
  'Amando',
  'Hey there! 👋 Welcome to the Mini Message Board. You can leave a message for everyone to see — just click "Add Message", type something fun, and post it! 📬'
);
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: isProduction
            ? process.env.DB_URL
            : process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
