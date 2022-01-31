import express, { json } from 'express';
const app = express(); 
import { config } from 'dotenv';
import pkg from 'mongoose';
const { connect } = pkg;

config();

// Import routes
import authRoute from './routes/auth.js';
import controlRoute from './routes/controler.js';

// Connect to DB
connect(process.env.DB_CONNECT, () => {
    console.log('Connected to database!');
})

// Middleware
app.use(json());
// Routes Middleware
app.use('/api/user', authRoute);
app.use('/api/control', controlRoute);



const port = process.env.port ? process.env.port : 3000 
app.listen(port, () => {
    console.log(`Successfuly started lisening on port ${port}`)
})