import { executeQuery } from './db.js';

export const getReviewsByProductId = async (productId) => {
  const query = `SELECT * FROM reviews WHERE product_id = ?`;
  return await executeQuery(query, [productId]); 
};

export const insertReview = async (product_id, review_text, rating, reviewer_name, email, save_email) => {
  const query = `
    INSERT INTO reviews (product_id, review_text, rating, reviewer_name, email, save_email)
    VALUES (?, ?, ?, ?, ?, ?);
  `;
  const values = [product_id, review_text, rating, reviewer_name, email, save_email];
  return await executeQuery(query, values);
};
