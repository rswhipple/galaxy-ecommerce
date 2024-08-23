const ShoppingCart = require('../models/ShoppingCart');
const ProductService = require('./productService');

class ShoppingCartService {
    static async getCart(cartId) {
        return ShoppingCart.findById(cartId).populate('products.product');
    }

    static async addToCart(cartId, productId, quantity) {
        const cart = await ShoppingCart.findById(cartId);
        const product = await ProductService.getProductById(productId);

        const cartProduct = cart.products.find(p => p.product._id.toString() === productId);
        if (cartProduct) {
            cartProduct.quantity += quantity;
        } else {
            cart.products.push({ product, quantity });
        }

        cart.total += product.price * quantity;
        return cart.save();
    }
}

module.exports = ShoppingCartService;
