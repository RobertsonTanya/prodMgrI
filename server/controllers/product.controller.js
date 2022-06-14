const Product = require('../models/product.model');

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {
            res.json(newProduct)
        })
        .catch((err) => { res.json(err)})
}
module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {res.json(allProducts)})
        .catch((err) => (res.json(err)))
}