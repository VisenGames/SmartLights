import express, { json } from 'express';
const app = express(); 
import { config } from 'dotenv';
import pkg from 'mongoose';
const { connect } = pkg;
import cors from 'cors';

import Govee from "node-govee-led";
import client from "./Client.js";

config();

const GoveeClient = new Govee({
	apiKey: process.env.API,
	mac: "",
	model: ""
})

GoveeClient.getDevices().then(data => console.log(data))
client.init();
client.govee.turnOff();

// Import routes
import authRoute from './routes/auth.js';
import controlRoute from './routes/controler.js';

// Connect to DB
connect(process.env.DB_CONNECT, () => {
    console.log('Connected to database!');
})

// Middleware
app.use(json());
app.use(cors());
// Routes Middleware
app.use('/api/user', authRoute);
app.use('/api/control', controlRoute);



const port = process.env.port ? process.env.port : 3000 
app.listen(port, () => {
    console.log(`Successfuly started lisening on port ${port}`)
})