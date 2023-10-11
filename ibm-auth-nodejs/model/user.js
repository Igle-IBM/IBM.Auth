const sql = require('mssql');
const { connectToDb } = require('../config/database');


async function createUser(email, password) {
  try {
    const pool = await connectToDb();
    const request = pool.request();
    request.input('email', sql.NVarChar, email);
    request.input('password', sql.NVarChar, password);

    const result = await request.query('INSERT INTO auth.[User] (email, password) VALUES (@email, @password)');
    return result.recordset;

  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const pool = await connectToDb();
    const request = pool.request();
    request.input('email', sql.NVarChar, email);

    const result = await request.query('SELECT * FROM auth.[User] WHERE email = @email');
    return result.recordset[0]; // Return the first record (assuming username is unique)
  } catch (error) {
    console.error('Error retrieving user by username:', error);
    throw error;
  }
}

module.exports = {
  createUser,
  getUserByEmail
};