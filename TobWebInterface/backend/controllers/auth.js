// IMPORTS
const { validationResult } = require('express-validator');
const config = require('../config/config.json');
const User = require('../models/user')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Verify the checkup of body request
exports.register = async (req, res, next) => {
    const errors = validationResult(req);

    // If there is error abord
    if(!errors.isEmpty()) return;

    // Get data from body
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;

    try {
        // hash password to not collect it clearly in DB
        const hashedPassword = await bcrypt.hash(password, 12);

        // Set object with data
        const userDetails = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashedPassword
        }

        // Send this data to the database
        const result = await User.save(userDetails);

        // Notice the frontend that the request is ok
        res.status(201).json({message: 'User registered'});

    } catch (err) {
        // Error server
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
}

// Verify the checkup of the request body
exports.login = async (req, res, next) => {
    // Get data
    const email = req.body.email;
    const password = req.body.password;

    try {
        // Check if user exist in DB
        const user = await User.find(email);

        // If there is no user that match email
        if (user[0].length !== 1) {
            // Notice client
            const error = new Error('A user with this email can not be found.');
            error.statusCode = 401;
            throw error;
        }

        // Stock user data (email, hashedpassword)
        const storedUser = user[0][0];

        // Check if password match
        const isEqual = await bcrypt.compare(password, storedUser.password);

        // Else notice user
        if(!isEqual) {
            const error = new Error('Wrong password.');
            error.statusCode = 401;
            throw error;
        }

        // Create secret token to authentify to server
        const token = jwt.sign({
            email: storedUser.email,
            userId: storedUser.id
        },
        config.secret,
        { expiresIn: '1h'}
        );

        // Send the token to client
        res.status(200).json({token: token, userId: storedUser.id });

    } catch (err) {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }

}