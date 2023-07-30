import express from 'express';

import { 
  getReviews,
} from '../controllers/controller.js';

const router = express.Router();

router.get('/:id', getReviews);

export default router;
