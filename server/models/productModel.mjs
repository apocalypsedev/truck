// models/Product.js fayli
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: false },
  price: { type: String, required: true },
  address: { type: String, required: true },
  place: { type: String, required: true },
  type: { type: String, required: true },
  phone: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
