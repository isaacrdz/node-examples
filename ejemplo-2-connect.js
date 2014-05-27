/*
	Mi primer middleware
*/

function logger(req,res,next){
	console.log('#backendpro %s %s', req.method, req.url);
}

var connect = require('connect');
var app = connect();


app
   .use(logger)
   .listen(3000);