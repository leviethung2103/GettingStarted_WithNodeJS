'use strict';

const express = require('express');
const path = require('path');
const process = require('process')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Send the file > index.html
app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'index.html'));
});

setInterval(() => {
	io.emit('image','some data');
},1000)


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


process.on('SIGINT', () => {
	console.info('Interrupted')
	process.exit(0)
});