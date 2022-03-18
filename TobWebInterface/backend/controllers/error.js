// When error 404
exports.get404 = (req, res, next) => {
    const error = new Error('Not found.');
    error.statusCode = 404;
    next(error);
}

// When error 500 (DEBUG)
exports.get500 = (error, req, res, next) => {
    const data = error.data;
    res.status(error.statusCode || 500)
    res.json({
        error: {
            message: error.message,
            data: data
        }
    });
}