const response = require('./../libs/responseLib');

let errorHandle = (err,req,res,next) => {
    let apiResponse = response.generate(true,'Application error handler called',500,err.message);
    res.send(apiResponse)
}

let routeNotFound = (req,res,next) => {
    console.log('route not found');
    let apiResponse = response.generate(true,'route not found',404,null);
    console.log(apiResponse);
    res.send(apiResponse);
}

module.exports = {
    errorHandle: errorHandle,
    routeNotFound: routeNotFound
}