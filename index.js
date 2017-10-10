const express = require('express');
const app = express(); // app is an object with a bunch of methods 
// to build a server


app.get('/', (request, response) =>{
	response.send('Hi Im the information server has sent to the client')
})

app.get('/tacos', (req, res) => {
	res.json({
		"taco": 52,
		"type": "carne asada"
	})
})

app.get('/chips', (req, res) => {
	console.log(req)
	res.json({
		"type": "Lays",
		"flavor": "barbecue"
	})
})

app.get('/charizo', (req, res) => {
	res.send('thirsty')
})

app.listen(3000, () =>{
	console.log ('I am listening on port 3000')
});




