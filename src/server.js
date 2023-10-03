const { render } = require('ejs');
const express = require('express');

const mysql = require('mysql2');

require('dotenv').config();

const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

// import express from 'express';
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template (view) engine
configViewEngine(app);

// route
app.use('/', webRoutes);

// test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, // default: 3306
    user: 'root', // default password: empty
    password: '123456',
    database: 'hoidanit',
});

connection.query('select * from Users u', function (err, results, fields) {
    console.log('===> results = ', results);
    console.log('===> fields = ', fields);
});

app.listen(port, hostname, () => {
    console.log(`Example app listening at ${port}`);
});
