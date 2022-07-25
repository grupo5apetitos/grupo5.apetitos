// Módulos ------------------------------------------------------- //
const methodOverride = require('method-override');  // Metodo para hacer uso de PUT and DELETE
const express = require('express');
const app = express();
const path = require('path');

// Requiriendo a las rutas --------------------------------------- //
const mainRouter = require('./routers/mainRouter');
const adminRouter = require('./routers/adminRouter');
const productRouter = require('./routers/productsRouter');
const userRouter = require('./routers/userRouter');

// Configuración ------------------------------------------------- //
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extends: true }));
app.use(methodOverride('_method')); //Metodo para uso de PUT
app.use(express.json());

// Utilizando el Template Engine EJS ----------------------------- //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


// Vista a la rutas ---------------------------------------------- //
app.use('/', mainRouter);
app.use('/productos', productRouter);
app.use('/administrador', adminRouter);
app.use('/usuarios', userRouter);

// Servidor a escuchar ------------------------------------------- //
app.listen(3000, () => {
    console.log("Servidor Activo en el puerto 3000...");
});

