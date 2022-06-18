// Paquetes Requeridos
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const passport = require('passport')
const session = require('express-session')
require('dotenv').config()

//configurando las rutas
const routes = require('./api/routes/users') // incluye la ruta authors.js file

//Middlewares
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false ,
    saveUninitialized: true ,
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(routes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()) // we need to tell server to use json as well

module.exports = app;