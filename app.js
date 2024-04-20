const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home', {
		nombre: 'Ricardo Alejandro',
		titulo: 'Curso de Node',
	});
});

app.get('/generic', (req, res) => {
	res.render('generic', {
		nombre: 'Ricardo Alejandro',
		titulo: 'Curso de Node',
	});
});

app.get('/elements', (req, res) => {
	res.render('elements', {
		nombre: 'Ricardo Alejandro',
		titulo: 'Curso de Node',
	});
});

app.listen(port, () => {
	console.log(`Backend corriendo en el puerto:`, port);
});
