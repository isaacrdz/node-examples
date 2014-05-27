/*
* Ejemplo completo
*/

var connect = require('connect');
var app = connect();

function hello (req,res,next){
	res.setHeader('Content-Type','text/plain');
	res.end('Hello World #backendpro')
}

function logger(req,res,next){
	console.log('#backendpro %s %s', req.method, req.url);
	next();
}

function authWithDB(user, pass, cb){
	if (pass !== 'backendpro'){
		return cb('Credenciales Incorrectas');
	}
	cb();
}

function restric(req,res,next){
	var authorization = req.headers.authorization;

	if(!authorization){
		return next(new Error ('Unauthorized'));
	}

	var parts = authorization.split(' ');
	var scheme = parts[0];
	var auth = new Buffer(parts[1],'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

authWithDB(user, pass, function (err){
	if (err){
		return next(err);
	}
	next()

	});
}

function admin(req,res,next){
	console.log('accesing', req.url)
	switch(req.url){
		case '/':
		res.end('try /users');
		break;
	case '/users':
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(['Javi','Zack', 'Pepe']));
		break;
	}
}

app
	.use(logger)
	.use('/admin', restric)
	.use('/admin', admin)
	.use(hello)
	.listen(3000)