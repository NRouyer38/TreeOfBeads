// IMPORTS
const express = require('express');
const { body } = require('express-validator');

const User = require('../models/user');
const authController = require('../controllers/auth');

// Set router
const router = express.Router();

// Behavior when client post on [adress]/auth/register
router.post(
    '/register',
    [
        // Check first name and last name
        body('first_name').trim().not().isEmpty(),
        body('last_name').trim().not().isEmpty(),
        
        // Check email 
        body('email').isEmail().withMessage("Please enter a valid email.").custom(async (email) => {
            // Check if email already exist
            const user = await User.find(email);
            if (user[0].length > 0) {
                // Reject registration
                return Promise.reject('Email adress already exist.')
            }
        }).normalizeEmail(),
        // Check paswword
        body('password').trim().isLength({min:7})
    ],
    // Send the checkup to controller
    authController.register
);

router.post(
    '/login',
    authController.login
);

module.exports = router;