require('dotenv').config();
const { create, verifyUserbyEmail, getUserProfile, registreComplainCreate, getRegisteredComplains } = require('./usersignup.service');

module.exports = {
    createUser: (req, res) => {
        var body = req.body.data;
        create(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err,
                    message: 'Authentication Error. Please try again.'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Account Created Successfully',
                data: results
            });
        });
    },
    verifyUserbyEmail: (req, res) => {
        const body = req.body;
        verifyUserbyEmail(body.email, (err, results) => {
            if (err) {
                console.log("Error Login");
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Invalid email or password'
                });
            }
            const result = body.password === results.password ? true : false;
            if (result) {
                results.password = undefined;
                return res.json({
                    success: 1,
                    message: 'Login Successfull',
                });
            } else {
                return res.json({
                    success: 0,
                    message: 'Invalid email or password'
                });
            }
        });
    },
    getUserProfileByEmail: (req, res) => {
        const body = req.body;
        getUserProfile(body.email, (err, results) => {
            if (err) {
                console.log("Error Login");
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Invalid email or password'
                });
            }
            return res.json({
                success: 1,
                message: 'Login Successfull',
                data: results
            });

        });
    },
    RegisterComplain: (req, res) => {
        var body = req.body.data;
        console.log('body', body);
        registreComplainCreate(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    error: err,
                    message: 'Authentication Error. Please try again.'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Complain Registered Successfully',
                data: results
            });
        });
    },
    getRegisteredDetails: (req, res) => {
        getRegisteredComplains(true, (err, results) => {
            if (err) {
                console.log("Error Login");
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: 'Authentication error'
                });
            }
            return res.json({
                success: 1,
                message: 'Data Fetched',
                data: results
            });

        });
    }
}