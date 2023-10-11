var sql = require("mssql");
require("dotenv").config();

// config for your database
const config = {
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  server: process.env.DATABASE_DOCKER_HOST, //Change to process.env.DATABASE_HOST
  database: process.env.DATABASE_NAME,
  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};

const connectToDb = async () => {
  try {
    // Connecting to the database
    return await sql.connect(config);
  } catch (error) {
    console.log("Database connection failed. Exiting now...");
    console.error(error);
    process.exit(1);
  }
};

module.exports = {
  connectToDb, // Export the connect function
};