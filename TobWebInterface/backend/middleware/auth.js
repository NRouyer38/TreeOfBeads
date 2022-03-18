const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

// Before request that need user to be auth
module.exports = (req, res, next) => {
    // Get the token from header
    const authHeader = req.get('Authorization');

    // If there is no auth header send error
    if (!authHeader) {
        const error = new Error();
        error.statusCode = 401;
        throw error;
    }

    // Get token
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        // Decode token
        decodedToken = jwt.verify(token, config.secret)
    } catch (err) {
        // Send error
        err.statusCode = 500;
        throw err;
    }

    // If the token is not known we send error
    if (!decodedToken){
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }

    // Send data
    req.isLoggedIn = true;
    req.userId = decodedToken.userId;
    req.email = decodedToken.email;
    next();
}