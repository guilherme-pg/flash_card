const fs = require('fs');

class ListDao {
    
    adding(bodyReqData) {
        return new Promise((resolve, reject) => {
            fs.writeFile(`./src/database/${bodyReqData.name_list}.txt`, `"option": "${option_activity}"`, function(err) {
                if(err) {
                    return console.log(err);
                };
                console.log("The file was SAVED!");
            });
            return resolve(true);
        });
    };



    read(bodyReqData) {
        return new Promise((resolve, reject) => {
            fs.readFile(`./src/database/${bodyReqData.name_list}.txt`, function(err) {
                if(err) {
                    return console.log(err);
                };
                console.log("The file was OPENED to read!");
            });
            return resolve(true);
        });
    };



    readDir() {
        return new Promise((resolve, reject) => {
            fs.readdir("./src/database/", function(err) {
                if(err) {
                    return console.log(err);
                };
                console.log("The FOLDER was OPENED to read!");
            });
            return resolve(true);
        });
    };
    
    

    delete(bodyReqData) {
        return new Promise((resolve, reject) => {
            fs.unlink(`./src/database/${bodyReqData.name_list}.txt`, function(err) {
                if(err) {
                    return console.log(err);
                };
                console.log("The file was DELETED!");
            });
            return resolve(true);
        });
    };



    rename(bodyReqData) {
        return new Promise((resolve, reject) => {
            fs.writeFile(`./src/database/${bodyReqData.name_list}.txt`, `./src/database/${bodyReqData.new_name}.txt`, function(err) {
                if(err) {
                    return console.log(err);
                };
                console.log("The file was RENAMED!");
            });
            return resolve(true);
        });
    };
};
module.exports = ListDao;