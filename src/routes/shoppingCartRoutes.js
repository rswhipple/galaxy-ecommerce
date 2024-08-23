const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controllers/shoppingCartController');

router.get('/cart/:cartId', shoppingCartController.getCart);
router.post('/cart/:cartId/product/:productId', shoppingCartController.addToCart);

module.exports = router;
