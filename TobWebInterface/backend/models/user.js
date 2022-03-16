const db = require('../util/database');

module.exports = class User {
    constructor(first_name, last_name, email, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    static find(email) {
        return db.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
    }

    static save(user) {
        return db.execute(
            'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
            [user.first_name, user.last_name, user.email, user.password]
        );
    }
}