const OrderService = require('../services/orderService');

exports.getOrders = async (req, res) => {
    const orders = await OrderService.getOrders();
    res.render('order', { orders });
};

exports.createOrder = async (req, res) => {
    const { cartId } = req.body;
    await OrderService.createOrder(cartId);
    res.redirect('/orders');
};
