const express = require('express')
const Router = express.Router()
const Product = require('../models/Product')

Router.route('/') // same as api/products
  .get((req, res) => {
    Product.find((err, products) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', data: products})
      }
    })
  })
  .post((req, res) => {
    const product = new Product()
    product.setProductData(req.body)
    product.setDate()
    product.save((err, savedProduct) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', data: savedProduct})
      }
    })
  })

Router.route('/:productId') // same as api/products/:productId
  .get((req, res) => {
    const productId = req.params.productId
    Product.findById({_id: productId}, (err, product) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `Found ${productId}`, data: product})
      }
    })
  })
  .put((req, res) => {
    const editProductId = req.params.productId
    Product.findById({_id: editProductId}, (err, product) => {
      if (err) {
        res.json({error: err})
      } else {
        product.setProductData(req.body)
        product.save((err, updatedProduct) => {
          if (err) {
            res.json({error: err})
          } else {
            res.json({msg: `Updated: ${editProductId}`, product: updatedProduct})
          }
        })
      }
    })
  })
  .delete((req, res) => {
    const deleteId = req.params.productId
    Product.remove({_id: deleteId}, (err, product) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: `${deleteId} was deleted`, data: product})
      }
    })
  })

module.exports = Router
