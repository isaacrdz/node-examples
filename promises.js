/*
	Ejemplo de promises
*/

artist.find('Miley')
.findEvents({city:'Bogota'})
.findTickets({price:{$lt:100}})
.purchase({cc:4242424242424242})
.then(function(transaction){
	customer.transaction = transaction;
	return customer.save();
})
.then(function(customer, transaction){
	return email.confirm(customer,transaction);
}).then(function){
	res.send({
		tickets:'purchased'
	}):
}, function(err){
	console.log('Ha habido un error',err);
});