import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './routes/products.mjs';
import User from './routes/auth.mjs';

// Load environment variables from .env file
dotenv.config();
const mongoURI = process.env.MONGODB_URI;

// Check if the URI is defined
if (!mongoURI) {
  console.error('MongoDB URI is not defined. Please set the MONGODB_URI environment variable.');
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api/products', Product);
// Start the server
// Define routes
app.use('/api/users', User);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});