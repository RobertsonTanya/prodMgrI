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
module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then((oneProduct) => {res.json(oneProduct)})
        .catch((err) => (res.json(err)))
}
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then((updateProduct) => {res.json(updateProduct)})
        .catch((err) => (res.json(err)))
}
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then((deleteProduct) => {res.json(deleteProduct)})
        .catch((err) => (res.json(err)))
}