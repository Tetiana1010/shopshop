import { getAllProducts, getProductById, insertProduct, deleteProductById } from '../models/products.model.js';

export const getAll = (req, res) => {
  getAllProducts((err, result) => {
    if (err) {
      res.status(500).json({ error: "Error retrieving products from the database." });
    } else {
      res.json(result);
    }
  });
};

export const getById = (req, res) => {
  const productId = req.params.id;

  getProductById(productId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error retrieving product from the database." });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: `Product with ID ${productId} not found.` });
      } else {
        res.json(result[0]);
      }
    }
  });
};

export const createProduct = (req, res) => {
  const { name, price, description } = req.body;
  const image = req.file ? req.file.filename : null;

  insertProduct(name, price, description, image, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error occurred while creating a new product." });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "No product was created." });
      } else {
        res.json({ message: "Product created successfully." });
      }
    }
  });
};

export const deleteProduct = (req, res) => {
  const productId = req.params.id;

  deleteProductById(productId, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error occurred while deleting product from the database." });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "No product was deleted." });
      } else {
        res.json({ message: "Product deleted." });
      }
    }
  });
};


