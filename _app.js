const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use('/static', express.static(publicPath));

// Iniciar el Servidor ..................................................... //
app.listen(3000, () => {
    console.log("Servidor Activo en el puerto 3000...");
});

// Rutas ................................................................... //
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/register.html'));
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/productCart.html'));
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/productDetail.html'));
});