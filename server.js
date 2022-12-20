const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

// init environment veriable

const PORT = process.env.PORT || 5050;

//express initialization

const app = express();

// express middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));






// listen on port

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
 });