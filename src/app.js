// Módulos ------------------------------------------------------- //
const methodOverride = require('method-override');
const express = require('express');
const path = require('path');
const app = express();

// Llamadas a las rutas ------------------------------------------ //
const mainRouter = require('./routers/mainRouter');
const adminRouter = require('./routers/adminRouter');
const productRouter = require('./routers/productsRouter');
const userRouter = require('./routers/userRouter');

// Configuración ------------------------------------------------- //
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

// Template Engine EJS ------------------------------------------- //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Vista a la rutas ---------------------------------------------- //
app.use('/', mainRouter);
app.use('/productos', productRouter);
app.use('/administrador', adminRouter);
app.use('/usuarios', userRouter); // en la ruta colocas el nombre que quieras XD

// Servidor a escuchar ------------------------------------------- //
app.listen(3000, () => {
    console.log("Servidor Activo en el puerto 3000...");
});

