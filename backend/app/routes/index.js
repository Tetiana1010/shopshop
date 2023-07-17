import express, { Router } from 'express';
import multer from 'multer';
import { 
  getAll,
  getAllMessages, 
  getById,
  getReviews,
  createProduct, 
  deleteProduct, 
  createMessage 
} from '../controllers/controller.js';

const router = express.Router();

router.get('/', getAll);
router.get('/messages', getAllMessages);

router.get('/:id', getById);

router.get('/reviews/:id', getReviews);

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });
  
router.post('/new', upload.single('image'), createProduct);

router.post('/messages/new', createMessage);

router.delete('/:id', deleteProduct);

export default router;
