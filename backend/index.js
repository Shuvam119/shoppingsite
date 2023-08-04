const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

const mongodbURI = process.env.MONGODB_URI;

mongoose.connect(mongodbURI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error =>'));

db.once('open', () => {
    console.log('connected to database successfully!');
})

app.use(express.json());
app.use(productRouter);

app.use(express.json());
app.use(userRouter);

app.listen(4000, '0.0.0.0', () => {
    console.log("Server started at port 4000");
});

