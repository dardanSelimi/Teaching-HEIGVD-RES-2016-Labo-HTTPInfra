var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(generateUsers());
});

app.listen(3000, function () {
  console.log('Acceptiong Http requests on port 3000!');
});

function generateUsers(){
var random = chance.integer({min: 1, max: 15});

var customers = [];

for(var i = 0; i < random; i++){
	var gender = chance.gender();
	var ip = chance.ip();

	customers.push({
		firstName: chance.first({
			gender: gender
		}),
        last: chance.last(),
        email: chance.email(),
		IPaddress: ip,
		AreYouSwagg: chance.hashtag()});
}
return customers;
}