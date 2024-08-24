const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // Load environment variables from .env

const productRoutes = require('./src/routes/productRoutes');
const shoppingCartRoutes = require('./src/routes/shoppingCartRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/', productRoutes);
app.use('/', shoppingCartRoutes);
app.use('/', orderRoutes);

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

