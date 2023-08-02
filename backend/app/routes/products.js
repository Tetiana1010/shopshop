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

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });
    
router.post('/new', upload.single('image'), createProductController);

router.put('/update/:id', upload.single('image'), updateProductController);

export default router;
