function notFoundErrorHandling(req, res, next) {
    let error = new Error('Not Found');
    error.status = 404;
    next(error);
}

function errorHandling(err, req, res, next) {
    res.status(err.status);
    res.render('error', {error: err});
}

module.exports = {
    notFoundErrorHandling,
    errorHandling
}