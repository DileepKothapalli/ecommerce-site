const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const productRoutes = require('./routes/productRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB Atlas
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// Routes
app.use('/api/products', productRoutes);

// Root endpoint (optional)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


// MONGO_URI=mongodb+srv://dileep:Pass123@cluster0.lsetbqn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//PORT=5000
