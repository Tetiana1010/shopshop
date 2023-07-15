import express from 'express';
import multer from 'multer';
import { getAll, getById, createProduct, deleteProduct } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });
  
router.post('/new', upload.single('image'), createProduct);

router.delete('/:id', deleteProduct);

export default router;
