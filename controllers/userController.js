
const path = require('path');
const { readFileSync } = require('fs');








/** 
* @desc get all users data  
* @name GET /api/v1/users
* @access public
*/

const getAllUsers = (req, res) => {
    // get all users from json DB
    const allUsers = JSON.parse(readFileSync((path.join(__dirname, '../db/user.json'))));

    //send data
    res.status(200).json(allUsers);


}



// Exports controllers

module.exports = {
    getAllUsers
}