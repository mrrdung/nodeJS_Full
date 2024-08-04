
const express = require('express'); //commonjs
const path = require('path');//commonjs
require('dotenv').config();
const configViewsEngine = require('./config/viewEngine');
const webroutes = require('./routes/web');
const mysql = require('mysql2');

// import express from express ; es moduns
// console.log(process.env)


const app = express()// app express
const port = process.env.PORT || 3000// port
const hot_name = process.env.HOST_NAME;



//config template engine
configViewsEngine(app);



//khai bao route
app.use('/', webroutes)

//test connect
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,//default:3306
    user: 'root',
    password: '123456',
    database: 'mrrdung',
});
// A simple SELECT query
connection.query(
    'SELECT * from Users',
    function (err, results, fields) {
        console.log(">>check results", results); // results contains rows returned by server
        console.log(">>check fields", fields); // fields contains extra meta data about results, if available
    }
);


//127.0.0.1
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})