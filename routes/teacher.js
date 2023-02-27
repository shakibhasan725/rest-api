const express = require('express');
const { getTeachers, setUser, getUser, deleteUser, updateUser} = require('../controllers/teacherController');



//create router

const router = express.Router();


//user routes


router.route('/').get(getTeachers).post(setUser);
router.route('/:id').get(getUser).delete(deleteUser).put(updateUser).patch(updateUser);




module.exports = router;