const express = require('express');
const { getAllUsers , setUser} = require('../controllers/userController');



//create router

const router = express.Router();


//user routes

router.get('/', getAllUsers);
router.post('/', setUser);






module.exports = router;