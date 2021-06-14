const pool = require('../../db/db.js');

module.exports = {
    create: (data, callBack) => {
        let sql = 'INSERT INTO userauthdetails (id,name,email,password) VALUES (?,?,?,?)';
        pool.query(sql, ['', data.fullname, data.email, data.password], (err, results, fields) => {
            if (err) {
                return callBack(err)
            }
            return callBack(null, results);
        });
    },
    verifyUserbyEmail: (email, callBack) => {
        let sql = 'SELECT * FROM userauthdetails WHERE email = ?';
        pool.query(sql, [email], (err, results, fields) => {
            if (err) {
                return callBack(err);
            }
            return callBack(null, results[0]);
        });
    },
    getUserProfile: (email, callBack) => {
        let sql = 'SELECT * FROM userauthdetails WHERE email = ?';
        pool.query(sql, [email], (err, results, fields) => {
            if (err) {
                return callBack(err);
            }
            return callBack(null, results[0]);
        });
    },
    registreComplainCreate: (data, callBack) => {
        console.log('data',data);
        let sql = 'INSERT INTO registeredcomplains (id,name,policestation,crimeaddress,crimeoccuredarea,postedAt) VALUES (?,?,?,?,?,?)';
        pool.query(sql, ['', data.name, data.policestation, data.crimeaddress, data.crimeoccuredarea, new Date()], (err, results, fields) => {
            if (err) {
                return callBack(err)
            }
            return callBack(null, results);
        });
    },
    getRegisteredComplains: (data, callBack) => {
        let sql = 'SELECT * FROM registeredcomplains';
        pool.query(sql, [data], (err, results, fields) => {
            if (err) {
                return callBack(err);
            }
            return callBack(null, results);
        });
    }
};
