/**
 * Importaciones del sistema
 */
require('dotenv').config();
const express = require('express');
var app = express();
var server = require('http').Server(app);
const router    = require('./src/routes/index');
const logger = require('morgan');

//Configuracion del servidor
app.set('port', process.env.PORT || process.env.APP_PORT);

app.use(express.json({ limit: '5mb' }));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin); //cambia esto 
    res.header("Access-Control-Allow-Headers", "x-requested-with, content-type,Authorization");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(express.static(__dirname + '/public'));

app.use('/compile', router.Compile);

// El servidor empieza a escuchar
server.listen(app.get('port'), function () {
    console.log(`server running in http://localhost:${app.get('port')}`);
});
