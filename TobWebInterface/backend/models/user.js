// IMPORTS
const db = require('../util/database');

// Create class User
module.exports = class User {
    // Set it attributes
    constructor(first_name, last_name, email, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    // Method find email
    static find(email) {
        return db.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
    }

    // Method save user
    static save(user) {
        return db.execute(
            'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
            [user.first_name, user.last_name, user.email, user.password]
        );
    }
}