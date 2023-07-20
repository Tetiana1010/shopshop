import mysql from 'mysql';
import dbConfig from '../config/db.config.js';

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database.');
  }
});

export const executeQuery = async (query, values) => new Promise((resolve, reject) => 
  connection.query(query, values, (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  }
));

export default connection;


