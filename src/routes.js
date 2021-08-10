const controller = require('./app/controllers/Controller')

module.exports = (app) => {
    
    // ROUTE: MAIN
    app.get('/', controller.main);

    // ROUTE: LISTS CRUD
    app.get('/lists', controller.lists);

    // ROUTE: CARDS CRUD
    app.get('/cards', controller.cards);

    // ROUTE: PLAY OPTIONS
    app.get('/play', controller.play);
};