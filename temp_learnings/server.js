import './config';
import https from 'https';
console.log('server.js');

import config, {non_standard_obj} from './config';

console.log(config, non_standard_obj);

https.get('https://www.google.co.in/?gfe_rd=cr&ei=GGl-V8LWILHT8geX_ISAAQ' , res => {
	console.log(res.statusCode);

	res.on('data',chunk=>{
		//console.log(chunk.toString().substring(0,10));
	});
});

import http from 'http';

const server = http.createServer();

server.listen(config.port);
console.log('server listening on port '+ config.port);

server.on('request', (req,res)=>{
	res.write('hello node server onne');
	res.end();
});
