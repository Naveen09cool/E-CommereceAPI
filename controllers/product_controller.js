const Product = require('../models/product');

// Fetch List of products
module.exports.list = async function(req, res){
    try{
        let product = await Product.find()
        return res.status(200).json({
            data:{
                message: "Products",
                products: product
            }
        })
    }catch(err){
        console.log('Error in fetching List of products',err);
        return res.send('Error in fetching List of products'+ err);
    } 
}

// Create Product
module.exports.create = async function(req, res){
    try{
        let product = new Product({
            name: req.body.name,
            quantity: req.body.quantity,
        });
        await product.save() 
        return res.status(200).json({
            message: "Product created",
            products: product
        })
    }catch(err){
        console.log('Error in creating product',err);
        return res.send('Error in creating product'+ err);
    } 
}

// Delete Product
module.exports.delete = async function(req, res){
    try{
        let product= await Product.findById(req.params.id);
            await product.remove();
            return res.status(200).json({
                message: "Product removed from list",
            })
    }catch(err){
        console.log('Error in removing product',err);
        return res.send('Error in removing product'+ err);
    } 
}

// Update quantity
module.exports.update = async function(req, res){
    try{
        let product= await Product.findById(req.params.id);
        // Here using req.query to update quantity [NOTICE: using number instead of quantity for query]
            product.quantity = req.query.number
            await product.save() 
            return res.status(200).json({
                message: "Product Quantity updated successfully",
                products: product
            })
    }catch(err){
        console.log('Error in updating quantity of the product',err);
        return res.send('Error in updating quantity of the product:::'+ err);
    } 
}



