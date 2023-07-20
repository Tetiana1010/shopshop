import express from 'express';

import { 
  getAllMessages, 
  createMessage 
} from '../controllers/controller.js';

const router = express.Router();

router.get('/', getAllMessages);

router.post('/new', createMessage);

export default router;
