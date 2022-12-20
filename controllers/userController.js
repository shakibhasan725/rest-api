
const path = require('path');
const { readFileSync, writeFileSync } = require('fs');








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
/** 
* @desc Set users data  
* @name POST /api/v1/users
* @access public
*/

const setUser = (req, res) => {
    // get all users from json DB
    const allUsers = JSON.parse(readFileSync((path.join(__dirname, '../db/user.json'))));

    //get body data

    const { name, age } = req.body;
    
    //velidation of data

     if (!name || !age) {
     
         res.status(400).json(
             {
                 message :'Name and age are required'
             }
         );
     } else {
         allUsers.push({
             id: Math.floor(Math.random() * 100000000),
             name: name,
             age : age
         }
         );
         writeFileSync(path.join(__dirname, '../db/user.json'), JSON.stringify(allUsers));
         res.status(201).json({
             message: 'User successfully created'
         })
        }


}



// Exports controllers

module.exports = {
    getAllUsers,
    setUser
}