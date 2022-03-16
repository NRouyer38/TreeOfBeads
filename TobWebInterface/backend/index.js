const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth')

const app = express();

const ports = process.env.PORT || 3000;

const errorController = require('./controllers/error')

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports, () => {
    console.log("Listen on port ${ports}");
});