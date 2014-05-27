/*
	Montaje de middleware
*/

var connect = require('connect');
var app = connect();

app
	.use('/admin',restric)
	.use('/admin', admin)
	.use(hello)
	.listen(3000);