const Product = require('../models/Product');

class ProductService {
    static async getAllProducts() {
        return Product.find();
    }

    static async getProductById(productId) {
        return Product.findById(productId);
    }

    static async createProduct(productData) {
        const product = new Product(productData);
        return product.save();
    }
}

module.exports = ProductService;
