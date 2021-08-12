const ListDao = require('./app/models/DAO-lists');
const controller = require('./app/controllers/Controller');


var bodyReqData = [];


module.exports = (app) => {
    
    // ROUTE: MAIN
    app.get('/', controller.main);


    // ROUTE: LISTS CRUD
    app.get('/lists', controller.lists);

    
    // ROUTE: update, delete or select a list
    app.post('/selectlist', function(req, res) {
        bodyReqData = req.body;
        const listDao = new ListDao();
        console.log('YYYYY bodyReqData  ===>>>  ', bodyReqData)

        if (bodyReqData.input_select == "Delete") {
            listDao.delete(bodyReqData)
                .then(res.redirect('/lists'))
                
        } else if (bodyReqData.input_select == "Manage") {
            // listDao.select(bodyReqData)
            //     .then(res.redirect('/cards'))
            console.log('GO PASS')

        } else if (bodyReqData.input_select == "Rename") {
            listDao.rename(bodyReqData)
                .then(res.redirect('/lists'))
        };
    });

    // ROUTE: create a list
    app.post('/createlist', function(req, res) {
        bodyReqData = req.body;
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