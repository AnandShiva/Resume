import config from './config';
import https from 'https';
import express from 'express';
import http from 'http';
import fs from 'fs';
import apiRoute from './api'
console.log('msg\'s in server.js');

var express_server = express();
express_server.set('view engine','ejs');

express_server.get('/random', (req,res)=>{
	res.render('index',{data : null});
});
express_server.listen(config.port, ()=>{
	console.log('express server listening at '+config.port);
});
express_server.use(express.static('public'));
express_server.use('/api', apiRoute);
express_server.get('/aboutmelong.html', (req, res)=>{
	console.info('express server sending ');
	fs.readFile('./resources/about.html', (err,data)=>{
	res.send(data.toString());
	});
});