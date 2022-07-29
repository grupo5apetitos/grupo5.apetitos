function authtMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        res.redirect('/usuarios/login');
    }
    next();
}

module.exports = authtMiddleware;