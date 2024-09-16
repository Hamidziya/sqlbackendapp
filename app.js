const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

module.exports = app;
