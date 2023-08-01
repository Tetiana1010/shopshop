import express from 'express';
import cors from 'cors';
import productsRoutes from './app/routes/products.js';
import reviewsRoutes from './app/routes/reviews.js';
import messagesRoutes from './app/routes/messages.js'

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to bezkoder application.' });
});

app.use('/products', productsRoutes);
app.use('/reviews', reviewsRoutes);
app.use('/messages', messagesRoutes);

const PORT = 7777;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
