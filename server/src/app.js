// app.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

// Routes
const studentRoute = require('./routes/students.route');
const friendRequestRoute = require('./routes/friendreq.route');

app.use('/api/v1/student', studentRoute);
app.use('/api/v1/friend-request', friendRequestRoute);

module.exports = app;
