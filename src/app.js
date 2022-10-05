// Módulos ------------------------------------------------------- //
const express = require('express');
const app = express();
const session = require('express-session');

// Requiriendo a las rutas --------------------------------------- //
const mainRouter = require('./routers/mainRouter');
const adminRouter = require('./routers/adminRouter');
const productRouter = require('./routers/productsRouter');
const userRouter = require('./routers/userRouter');

// Rutas de API's ------------------------------------------------ //
const productAPIRouter = require('./routers/api/productsRouter');
const categoryAPIRouter = require('./routers/api/categoryRouter');
const userAPIRouter = require('./routers/api/usersRouter');

// --------------------------------------------------------------- //
const path = require('path');
const methodOverride = require('method-override');  // Método para hacer uso de PUT & DELETE
const cookieParser = require('cookie-parser');
const userLoggedMiddleware = require('./middleware/userLoggedMiddleware');

// Configuración ------------------------------------------------- //
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method')); // Método para uso de PUT & DELETE
app.use(express.urlencoded({ extended: false }));
app.use(session({secret: 'secret', resave: false, saveUninitialized: false}));
app.use(cookieParser());
app.use(userLoggedMiddleware);

// Utilizando el Template Engine EJS ----------------------------- //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Vista a la rutas ---------------------------------------------- //
app.use('/', mainRouter);
app.use('/productos', productRouter);
app.use('/administrador', adminRouter);
app.use('/usuarios', userRouter);

// Rutas para las API's --------------------------------------------//
app.use('/api/products', productAPIRouter);
app.use('/api/users', userAPIRouter);
app.use('/api/category', categoryAPIRouter);

// Servidor a escuchar ------------------------------------------- //
app.listen(3002, () => {
    console.log("Servidor Activo en el puerto 3002...");
});

