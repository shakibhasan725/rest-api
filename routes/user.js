const express = require('express');
const { getAllUsers , setUser, deleteUser, getUser} = require('../controllers/userController');



//create router

const router = express.Router();


//user routes

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', setUser);
router.delete('/:id', deleteUser);






module.exports = router;