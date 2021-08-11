const fs = require('fs');

class ListDao {
    // bodyReqData
    adding(bodyReqData) {
        return new Promise((resolve, reject) => {
            fs.writeFile(`./src/database/${bodyReqData.name_list}.txt`, "Hallo Welt!", function(err) {
                if(err) {
                    console.log('CCCCCCCCCCC')
                    return console.log(err);
                };
                console.log("The file was SAVED!");
            });
            return resolve(true);
        })
    };
};
module.exports = ListDao;


// create list
// read list
// update list
// delete list

// create card
// read card
// update card
// delete card