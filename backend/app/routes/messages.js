import express from 'express';

import { getAllMessagesController, createMessageController } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getAllMessagesController);

router.post('/new', createMessageController);

export default router;
