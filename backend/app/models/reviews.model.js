import { executeQuery } from './db.js';

export const getReviewsById = async (productId) => {
  const query = `SELECT * FROM reviews WHERE product_id = ?`;
  return await executeQuery(query, [productId]);
};
