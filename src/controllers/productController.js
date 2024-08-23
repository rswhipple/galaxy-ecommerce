const ProductService = require('../services/productService');

exports.getAllProducts = async (req, res) => {
    const products = await ProductService.getAllProducts();
    res.render('home', { products });
};
