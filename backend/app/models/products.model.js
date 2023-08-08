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

export const insertProduct = async (name, price, category, SKU, description, weight, dimentions, colour, material) => {
  const query = `INSERT INTO products (name, price, category, SKU, description, weight, dimentions, colour, material) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [name, price, category, SKU, description, weight, dimentions, colour, material];
  return await executeQuery(query, values);
};

export const updateProduct = async (id, name, price, category, SKU, description, weight, dimentions, colour, material) => {
  const query = `UPDATE products 
  SET name = ?, price = ?, category = ?, SKU = ?, description = ?, weight = ?, dimentions = ?, colour = ?, material = ? 
  WHERE id = ${id}`;

  const values = [name, price, category, SKU, description, weight, dimentions, colour, material, id];
  return await executeQuery(query, values);
};

export const deleteProductById = async (productId) => {
  const deleteReviewsQuery = `DELETE FROM reviews WHERE product_id = ?`;
  await executeQuery(deleteReviewsQuery, [productId]);

  const deleteProductQuery = `DELETE FROM products WHERE id = ?`;
  return await executeQuery(deleteProductQuery, [productId]);
};

