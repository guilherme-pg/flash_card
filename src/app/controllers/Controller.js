const ListDao = require('../models/DAO-lists')

module.exports = {
   
   async main(req, res){
      try{
         await res.render('index',{
            title: "Flash Card",
            layout: 'mainLayouts',
            style: "index.css"
         }) 
         
      }catch(err){
         console.error(err)
      }
   },
   async lists(req, res){
      try{
         const listDao = new ListDao();
         files = await listDao.readDir();
         await res.render('CRUD-lists',{
            title: "Lists",
            layout: 'mainLayouts',
            style: "CRUD-lists.css",
            files: files
         }) 
         
      }catch(err){
         console.error(err)
      }
   },
   async cards(req, res){
      try{
         await res.render('CRUD-cards',{
            title: "Cards",
            layout: 'mainLayouts',
            style: "CRUD-cards.css"
         }) 
         
      }catch(err){
         console.error(err)
      }
   },
   async play(req, res){
      try{
         await res.render('play',{
            title: "Play",
            layout: 'mainLayouts',
            style: "play.css"
         }) 
         
      }catch(err){
         console.error(err)
      }
   }
}