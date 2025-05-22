
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
connectDB();

app.use(express.json());
app.use(authRoutes);
app.use(bookRoutes);
app.use(reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
