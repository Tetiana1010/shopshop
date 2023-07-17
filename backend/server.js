// import express from "express";
// import cors from 'cors';
// import mysql from "mysql";
// const app = express();


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// app.use(cors());

// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'shop13',
//   database: 'shopshop', 
// });

// app.get("/products", (req, res) => {
//   con.query("SELECT * FROM products", function (err, result) {
//     if (err) {
//       res.status(500).json({ error: "Error retrieving products from the database." });
//     } else {
//       res.json(result);
//     }
//   });
// });

// app.listen(7777, () => {
//   console.log('Server is running on http://localhost:7777');
// });


import express from 'express';
import cors from 'cors';
import productsRoutes from './app/routes/index.js';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to bezkoder application.' });
});

app.use('/products', productsRoutes);

const PORT = 7777;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
