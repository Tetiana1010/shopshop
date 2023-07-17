import connection from './db.js';

const executeQuery = (query, values, callback) => {
  connection.query(query, values, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

export const getAllProducts = (callback) => {
  const query = "SELECT * FROM products";
  executeQuery(query, null, callback);
};

export const getAllContactMessages = (callback) => {
  const query = "SELECT * FROM contactMessages";
  executeQuery(query, null, callback);
};

export const getProductById = (productId, callback) => {
  const query = `SELECT * FROM products WHERE id = ?`;
  executeQuery(query, [productId], callback);
};

export const insertProduct = (name, price, description, image, callback) => {
  const query = `INSERT INTO products (name, price, description, image) VALUES (?, ?, ?, ?)`;
  const values = [name, price, description, image];
  executeQuery(query, values, callback);
};

export const insertMessage = (firstName, lastName, email, subject, message, callback) => {
  const query = `INSERT INTO contactMessages (firstName, lastName, email, subject, message) VALUES (?, ?, ?, ?, ?)`;
  const values = [firstName, lastName, email, subject, message];
  executeQuery(query, values, callback);
};

export const deleteProductById = (productId, callback) => {
  const query = `DELETE FROM products WHERE id = ?`;
  executeQuery(query, [productId], callback);
};

// export const crateTable = (tableName, callback) => {
//   const query = `CREATE TABLE ${tableName} (
//     firstName varchar(255),
//     lastName varchar(255),
//     email varchar(255),
//     subject varchar(255),
//     message varchar(255) 
//   ); `;

//   connection.query(query, (err, result) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, result);
//     };
//   });
// };
