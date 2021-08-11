const ListDao = require('./app/models/DAO-lists');
const controller = require('./app/controllers/Controller');


var bodyReqData = [];


module.exports = (app) => {
    
    // ROUTE: MAIN
    app.get('/', controller.main);


    // ROUTE: LISTS CRUD
    app.get('/lists', controller.lists);


    // ROUTE: CATCH THE FORM DATA
    app.post('/createlist', function(req, res) {
        bodyReqData = req.body;
        console.log('AAAAAA   bodyReqData  ==>>  ', bodyReqData)
        const listDao = new ListDao();
        listDao.adding(bodyReqData)
            .then(res.redirect('/lists'))
            // .catch(erro => console.log(erro));
    });


    // ROUTE: CARDS CRUD
    app.get('/cards', controller.cards);

    
    // ROUTE: PLAY OPTIONS
    app.get('/play', controller.play);
};