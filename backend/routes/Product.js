const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // assuming you have a Product model

// Get all products
router.get('/products', (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
