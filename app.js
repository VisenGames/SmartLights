const express = require('express');
const app = express(); 
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// Import routes
const authRoute = require('./routes/auth');
const controlRoute = require('./routes/controler');

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, () => {
    console.log('Connected to database!');
})

// Middleware
app.use(express.json());
// Routes Middleware
app.use('/api/user', authRoute);
app.use('/api/control', controlRoute);



const port = process.env.port ? process.env.port : 3000 
app.listen(port, () => {
    console.log(`Successfuly started lisening on port ${port}`)
})