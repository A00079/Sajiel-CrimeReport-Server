const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


const RegisterComplain = require('./routes/UserSignUp/usersignup.routes');
const RegisterComplainRead = require('./routes/UserSignUp/usersignup.routes');
const UserSignUp = require('./routes/UserSignUp/usersignup.routes');
const UserSignIn = require('./routes/UserSignUp/usersignup.routes');
const UserProfile = require('./routes/UserSignUp/usersignup.routes');


// Routes
app.use('/api/v1/crimereport/newuser', UserSignUp);
app.use('/api/v1/crimereport/user', UserSignIn);
app.use('/api/v1/crimereport/userprofile', UserProfile);
app.use('/api/v1/crimereport/registercomplain', RegisterComplain);
app.use('/api/v1/crimereport/complain', RegisterComplainRead);

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, 'build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

}

app.listen(port, () => {
    console.log(`Server Running at ${port}`);
});