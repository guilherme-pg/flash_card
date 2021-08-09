module.exports = {
   
    async main(req, res){
       try{
          await res.render('index',{
             title: "My Flash Card",
             layout: 'mainLayouts',
             style: "index.css"
          }) 
          
       }catch(err){
          console.error(err)
       }
    }
    
 }