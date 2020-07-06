const express = require('express')
const app = express()
const hbs = require('hbs');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Pablo',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Pablo',
    });
});

app.listen(port, () => {
    console.log(`Escuchando por puerto: ${port}`);
});