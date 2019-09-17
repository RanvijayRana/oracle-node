const controller = require('./../controller/logicPart');

let setRouter = (app) => {
    app.get('/login',controller.login);
    app.get('/signup',controller.signup);
    app.get('/createTable',controller.createTable);
    app.get('/deleteTable',controller.deleteTable);
    app.get('/viewAll',controller.viewAll);
}

module.exports = {
    setRouter: setRouter
}