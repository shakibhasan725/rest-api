const express = require('express');
const { getAllUsers } = require('../controllers/userController');



//create router

const router = express.Router();


//user routes

router.get('/', getAllUsers);






module.exports = router;