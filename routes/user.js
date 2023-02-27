const express = require('express');
const { getAllUsers , setUser, deleteUser, getUser, updateUser} = require('../controllers/userController');



//create router

const router = express.Router();


//user routes


router.route('/').get(getAllUsers).post(setUser);
router.route('/:id').get(getUser).delete(deleteUser).put(updateUser).patch(updateUser);




module.exports = router;