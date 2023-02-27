const express = require('express');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/user');
const teacherRoutes = require('./routes/teacher');

// init environment veriable

const PORT = process.env.PORT || 6050;

//express initialization

const app = express();

// express middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/teacher', teacherRoutes);






// listen on port

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
 });