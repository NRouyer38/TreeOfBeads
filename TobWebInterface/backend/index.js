const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth')

const app = express();

const ports = process.env.PORT || 3000;

const errorController = require('./controllers/error');

const config = require('./config/config.json');

const cors = require('cors');

app.use(bodyParser.json());

app.use(cors({
    origin: config.client.host,
    allowedMethods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use('/auth', authRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports, () => {
    console.log(`Listen on port ${ports}`);
});