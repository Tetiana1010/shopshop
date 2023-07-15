import connection from './db.js';

export const getAllProducts = (callback) => {
  const query = "SELECT * FROM products";

  connection.query(query, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    };
  });
};

export const getProductById = (productId, callback) => {
  const query = `SELECT * FROM products WHERE id = ${productId}`;

  connection.query(query, [productId], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    };
  });
};

export const insertProduct = (name, price, description, image, callback) => {
  const query = `INSERT INTO products (name, price, description, image)
    VALUES (?, ?, ?, ?)`;

  connection.query(query, [name, price, description, image], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

export const deleteProductById = (productId, callback) => {
  const query = `DELETE FROM shopshop.products WHERE id = ${productId}`;

  connection.query(query, [productId], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    };
  });
};
