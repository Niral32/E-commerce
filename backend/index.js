const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://pniral54:<password>@niralkumar.bqjh4sb.mongodb.net/?retryWrites=true&w=majority&appName=niralkumar', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Routes
const productRoutes = require('./routes/products');
app.use('/api', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
