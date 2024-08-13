const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(express.json()); // To parse JSON bodies
app.use(cors());
app.use(bodyParser.json());

// Check if the MONGODB_URI environment variable is loaded
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
    console.error('MONGODB_URI environment variable is not set');
    process.exit(1); // Exit the process with failure
}

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Import and use routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

const userRoutes = require('./routes/user'); // Import user routes
app.use('/api/users', userRoutes); // Use user routes



// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
