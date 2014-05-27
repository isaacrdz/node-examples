/*
	*Ejemplo con manejor de callbacks usando async
*/

var async = require('async');

async.waterfall(
[
	function(cb){
		artist.findEvents('Miley,'cb);
	},
	function(concert,cb){
		concert.findTickets({price:{$lt: 100}},cb);
	},
	function(tickets,cb){
		tickets.purchase({cc:4242424242424242},cb);
	},
	function(transaction,cb){
		customer.transaction = transaction;
		customer.save(cb);
	},
	function(customer, transaction,cb){
		email.confirm(customer, transaction,cb);
	}

], 
	function ('null',status){

		if(err){
			res.send(err);
			return false;
		}
			res.send({
				tickets:'purchased'
			});
		});