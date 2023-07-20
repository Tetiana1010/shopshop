import { getAllProducts, getProductById, insertProduct, deleteProductById } from '../models/products.model.js';
import { getAllContactMessages, insertMessage } from '../models/messages.model.js';
import { getReviewsById } from '../models/reviews.model.js';

export const getAll = async (req, res) => {
  const products = await getAllProducts();
  return res.json(products);
};

export const getAllMessages = async (req, res) => {
  const messages = await getAllContactMessages();
  return res.json(messages);
};

export const getById = async (req, res) => {
  const productId = req.params.id;
  const product =  await getProductById(productId);
  return res.json(product[0]);
};

export const getReviews = async (req, res) => {
  const productId = req.params.id;
  const reviews = await getReviewsById(productId);
  console.log((reviews))
  return res.json(reviews);
};

export const createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const image = req.file ? req.file.filename : null;
  const newProduct = await insertProduct(name, price, description, image);
  return res.json(newProduct);
};

export const createMessage = async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;
  const newMessage = await insertMessage(firstName, lastName, email, subject, message)
  return res.json(newMessage);
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  const deleteProduct = await deleteProductById(productId);
  return res.json(deleteProduct);
};


