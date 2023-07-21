import express from 'express';
import multer from 'multer';

import { getReviewsController, createReviewController } from '../controllers/controller.js';
const upload = multer();

const router = express.Router();

router.get('/:id', getReviewsController);
router.post('/new', upload.none(), createReviewController);

export default router;
