// Módulos ------------------------------------------------------- //
const express = require('express');
const path = require('path');
const app = express();
//REQUIRE DE mainRouter 
const mainRouter = require('./routes/mainRouter');

// Configuración ------------------------------------------------- //
const publicPath = path.resolve(__dirname, '../public');
app.use('/static', express.static(publicPath));

// Template Engine EJS ------------------------------------------- //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Vista a la rutas ---------------------------------------------- //
app.use('/', mainRouter);

// Servidor a escuchar ------------------------------------------- //
app.listen(3000, () => {
    console.log("Servidor Activo en el puerto 3000...");
});

