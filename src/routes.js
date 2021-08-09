const controller = require('./app/controllers/Controller')

module.exports = (app) => {
    
    // ROUTE: MAIN
    app.get('/', controller.main);

};