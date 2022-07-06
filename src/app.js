// Módulos ------------------------------------------------------- //
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

// Llamadas a las rutas ------------------------------------------ //
const mainRouter = require('./routes/mainRouter');
//const productRouter = require('./routes/productRouter');
const adminRouter = require('./routes/adminRouter');

// Configuración ------------------------------------------------- //
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));

// Template Engine EJS ------------------------------------------- //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Vista a la rutas ---------------------------------------------- //
app.use('/', mainRouter);
//app.use('/productos', productRouter);
app.use('/administrador', adminRouter);





// Servidor a escuchar ------------------------------------------- //
app.listen(3000, () => {
    console.log("Servidor Activo en el puerto 3000...");
});

