const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 }
        }
    ],
    total: { type: Number, required: true }
});

module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);
