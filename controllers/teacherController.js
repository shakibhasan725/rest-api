
const path = require('path');
const { readFileSync, writeFileSync } = require('fs');








/** 
* @desc get all teachers data  
* @name GET /api/v1/teacher
* @access public
*/

const getTeachers = (req, res) => {
    // get all users from json DB
    const teachers = JSON.parse(readFileSync((path.join(__dirname, '../db/teacher.json'))));

    //send data
    res.status(200).json(teachers);


}


/** 
* @desc get single users data  
* @name GET /api/v1/users/:id
* @access public
*/

const getUser = (req, res) => {


    // get all users from json DB
    const allUsers = JSON.parse(readFileSync((path.join(__dirname, '../db/teacher.json'))));



    const user = allUsers.find(data => data.id == req.params.id);

    if (user) {
        res.status(200).json(user);

    } else {
        res.status(404).json('User not found');
    }
}








/** 
* @desc Set teacher data  
* @name POST /api/v1/teacher
* @access public
*/

const setUser = (req, res) => {
    // get all users from json DB
    const allUsers = JSON.parse(readFileSync((path.join(__dirname, '../db/teacher.json'))));

    //get body data

    const { name, age } = req.body;
    
    //velidation of data

     if (!name || !age) {
     
         res.status(404).json(
             {
                message : 'Name and age are required'
             }
         );
     } else {
         allUsers.push({
             id: Math.floor(Math.random() * 100000000),
             name: name,
             age : age
         }
         );
         writeFileSync(path.join(__dirname, '../db/teacher.json'), JSON.stringify(allUsers));
         res.status(201).json(
             {
             message: 'User successfully created'
             }
         )
        }


}

/** 
* @desc delete all users data  
* @name Delete /api/v1/users/:id
* @access public
*/

const deleteUser = (req, res) => {
    // get all users from json DB
    const teachers = JSON.parse(readFileSync((path.join(__dirname, '../db/teacher.json'))));




    if (teachers.some(data => data.id == req.params.id)) {

        const newTeacher = teachers.filter( data => data.id != req.params.id );

        writeFileSync(path.join(__dirname, '../db/teacher.json'), JSON.stringify(newTeacher));

        res.status(200).json('Successfully Deleted User');

    } else {
        res.status(404).json('Invalid User');
    }
    


}
/** 
* @desc Update users data  
* @name put/patch /api/v1/users/:id
* @access public
*/

const updateUser = (req, res) => {
    // get all users from json DB
    const allUsers = JSON.parse(readFileSync((path.join(__dirname, '../db/teacher.json'))));




    if (allUsers.some(data => data.id == req.params.id)) {
        allUsers[allUsers.findIndex(data => data.id == req.params.id)]={
            ...allUsers[allUsers.findIndex(data => data.id == req.params.id)],
            ...req.body 
        }

        writeFileSync(path.join(__dirname, '../db/teacher.json'), JSON.stringify(allUsers));

        res.status(200).json('Successfully Upadted');
        

    } else {
        res.status(404).json('Invalid User');
    }
    


}




// Exports controllers

module.exports = {
    getTeachers,
    setUser,
    deleteUser,
    getUser,
    updateUser
}