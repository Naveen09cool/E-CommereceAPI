const express = require('express');
const router = express.Router();
const productController = require('../controllers/product_controller');


// API to list products
router.get('/products', productController.list);

// API to add products to the database
router.post('/products/create', productController.create);

// API to delete products
router.delete('/products/:id', productController.delete);

// API to update quantity of a product
router.post('/products/:id/update_quantity/', productController.update);

// Exporting router
module.exports = router;