/*
	Multi Middlewares
*/


function hello (req,res,next){
	res.setHeader('Content-Type','text/plain');
	res.end('Hello World #backendpro')
}

function logger(req,res,next){
	console.log('#backendpro %s %s', req.method, req.url);
	next();
}

var connect = require('connect');
var app = connect()


app
	.use(logger)
	.use(hello)
	.listen(3000)