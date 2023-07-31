import { getAllProducts, getProductById, insertProduct, deleteProductById } from '../models/products.model.js';
import { getAllContactMessages, insertMessage } from '../models/messages.model.js';
import { getReviewsByProductId, insertReview } from '../models/reviews.model.js';

// Products
export const getAllProductsController = async (req, res) => {
  const products = await getAllProducts();
  return res.json(products);
};

export const getProductByIdController = async (req, res) => {
  const productId = req.params.id;
  const product = await getProductById(productId);
  return res.json(product[0]);
};

export const createProductController = async (req, res) => {
  const { name, price, category, SKU, description, weight, dimentions, colour, material } = req.body;
  const image = req.file ? req.file.filename : null;
  const newProduct = await insertProduct(name, price, SKU, category, description, weight, dimentions, colour, material, image);
  return res.json(newProduct);
};

export const deleteProductController = async (req, res) => {
  const productId = req.params.id;
  const deletedProduct = await deleteProductById(productId);
  return res.json(deletedProduct);
};

// Messages
export const getAllMessagesController = async (req, res) => {
  const messages = await getAllContactMessages();
  return res.json(messages);
};

export const createMessageController = async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;
  const newMessage = await insertMessage(firstName, lastName, email, subject, message);
  return res.json(newMessage);
};

// Reviews
export const getReviewsController = async (req, res) => {
  const productId = req.params.id;
  const reviews = await getReviewsByProductId(productId);
  return res.json(reviews);
};

export const createReviewController = async (req, res) => {
  const { product_id, review_text, rating, reviewer_name, email, save_email } = req.body;
  const newReview = await insertReview(product_id, review_text, rating, reviewer_name, email, save_email);
  return res.json(newReview);
}


