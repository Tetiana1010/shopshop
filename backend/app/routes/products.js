import express from 'express';
import multer from 'multer';
import { 
  getAllProductsController,
  getProductByIdController,
  deleteProductController,
  createProductController,
  updateProductController 
} from '../controllers/controller.js';

const router = express.Router();

router.get('/', getAllProductsController);

router.get('/:id', getProductByIdController);

router.delete('/:id', deleteProductController);

const upload = multer();
    
router.post('/new', upload.none(), createProductController);

router.put('/update/:id', upload.none(), updateProductController);

export default router;
