var app = require('./config/customExpress');


// GENERATE THE GATE
const PORT = process.env.PORT || 8080;

app.listen(PORT, function(error){ 
    if(error) throw error 
    console.log(`SERVER running on url http://localhost:${PORT}`); 
});