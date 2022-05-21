// require library
const mongoose = require('mongoose');

// Schema
const productSchema = new mongoose.Schema({
    name:{
        type: String,
    } ,
    quantity:{
        type: Number,
    }
},{timestamps:true})

const Product = mongoose.model('Product', productSchema);
// exporting schema
module.exports = Product;