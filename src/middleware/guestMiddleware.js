function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {
        res.redirect('/usuarios/perfil');
    }else{
        next();
    }
    
}

module.exports = guestMiddleware;