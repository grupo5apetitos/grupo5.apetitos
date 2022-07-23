const middleware = {
    error_404: function(req, res, next) {
        // res.send('Aquí esta el middleware');
        next();
    },
    valida_user: function(req, res, next) {
        // ...
        next();
    }
};

module.exports = middleware;