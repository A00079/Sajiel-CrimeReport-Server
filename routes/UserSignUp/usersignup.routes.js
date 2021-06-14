const { createUser, verifyUserbyEmail, getUserProfileByEmail, RegisterComplain, getRegisteredDetails } = require('./usersignup.controller');
const router = require('express').Router();

// Create User
router.post('/create', createUser);
router.post('/signin', verifyUserbyEmail);
router.post('/read', getUserProfileByEmail);
router.post('/post', RegisterComplain);
router.get('/getdata', getRegisteredDetails);

module.exports = router;