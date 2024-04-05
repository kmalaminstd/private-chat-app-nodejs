

const createError = require("http-errors")

// 404 not found
function notFoundHandler(req, res, next){
    next(createError(404, "Your requested content was not found!"))
}

// default err handler
function errorHandler(err, req, res, next){
    res.locals.error = process.env.NODE_ENV === 'development' ? err : {message: err.message}
    res.status(err.status || 500)
    // console.log('Status code:', res.status);
    // console.log(!!res.locals.html);
    if(res.locals.html){
        // html response
        res.render("error", {
            title: "Error Page"
        })
    }else{
        res.json(res.locals.error)
    }
}

module.exports = {
    notFoundHandler,
    errorHandler
}