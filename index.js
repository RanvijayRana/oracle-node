const express = require('express');
const router = require('./routes/router');
const globalError = require('./middleware/appErrorHandler');

const app = express();

app.use(globalError.errorHandle);
router.setRouter(app);
app.use(globalError.routeNotFound);

let server = app.listen(3000, () => {
    console.log('server running on port 3000');
})

module.exports = {
    server: server
}