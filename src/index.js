
const express = require('express'); //commonjs
const path = require('path');//commonjs
require('dotenv').config();
const configViewsEngine = require('./config/viewEngine');
const webroutes = require('./routes/web');
const connection = require('./config/database');

// import express from express ; es moduns
// console.log(process.env)


const app = express()// app express
const port = process.env.PORT || 3000// port
const hot_name = process.env.HOST_NAME;

//config req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

//config template engine
configViewsEngine(app);



//khai bao route
app.use('/', webroutes)




//127.0.0.1
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})