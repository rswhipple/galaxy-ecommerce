const ShoppingCartService = require('../services/shoppingCartService');

exports.getCart = async (req, res) => {
    const cart = await ShoppingCartService.getCart(req.params.cartId);
    res.render('cart', { cart });
};

exports.addToCart = async (req, res) => {
    const { cartId, productId } = req.params;
    await ShoppingCartService.addToCart(cartId, productId, 1);
    res.redirect('/');
};
