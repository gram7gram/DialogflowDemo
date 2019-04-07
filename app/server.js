'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = require('./app.js');

const server = express()

server.use(bodyParser.json(), app);

app.use(express.static(__dirname + '/public', {dotfiles: 'allow'}))

server.use('/test', (req, res) => {
    res.writeHead(200)
    res.end('Bam')
})

server.listen(80)
server.listen(443)