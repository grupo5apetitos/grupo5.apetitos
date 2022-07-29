function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {
        res.redirect('/usuarios/perfil');
    }
    next();
}

module.exports = guestMiddleware;