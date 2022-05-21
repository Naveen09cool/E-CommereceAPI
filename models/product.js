// require library
const mongoose = require('mongoose');

// Schema for Product [fields: id, name, quantity] with timeStamps
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    } ,
    quantity:{
        type: Number,
        required: true
    }
},{timestamps:true})

const Product = mongoose.model('Product', productSchema);
// exporting schema
module.exports = Product;