const Order = require('../models/Order');
const ShoppingCartService = require('./shoppingCartService');

class OrderService {
    static async createOrder(cartId) {
        const cart = await ShoppingCartService.getCart(cartId);
        const order = new Order({ cart });
        return order.save();
    }

    static async getOrders() {
        return Order.find().populate('cart');
    }
}

module.exports = OrderService;
