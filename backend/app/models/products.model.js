import { executeQuery } from './db.js';

export const getAllProducts = async () => {
  const query = "SELECT * FROM products";
  return await executeQuery(query, null);
};

export const getProductById = async (productId) => {
  const query = `SELECT * FROM products WHERE id = ?`;
  return await executeQuery(query, [productId]);
};

export const getReviewsById = async (productId) => {
  const query = `SELECT * FROM reviews WHERE product_id = ?`;
  return await executeQuery(query, [productId]);
};

export const insertProduct = async (name, price, category, SKU, description, weight, dimentions, colour, material, image) => {
  const query = `INSERT INTO products (name, price, category, SKU, description, weight, dimentions, colour, material, image) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [name, price, category, SKU, description, weight, dimentions, colour, material, image];
  return await executeQuery(query, values);
};

export const deleteProductById = async (productId) => {
  const query = `DELETE FROM products WHERE id = ?`;
  return await executeQuery(query, [productId]);
};
