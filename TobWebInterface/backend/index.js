// IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth')
const errorController = require('./controllers/error');
const config = require('./config/config.json');

// Init API and Port
const app = express();
const ports = process.env.PORT || 3000;

// Set body parser
app.use(bodyParser.json());

// Set cors policy
app.use(cors({
    origin: config.client.host,
    allowedMethods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Set auth routes
app.use('/auth', authRoutes);

// Set error response
app.use(errorController.get404);
app.use(errorController.get500);

// Run app
app.listen(ports, () => {
    console.log(`Listen on port ${ports}`);
});