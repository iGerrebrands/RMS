const collections = require('./collections');
const Config = require('../config.json');

class Database {

    setDatabase(database) {
        this.db = database;
    }

    setupDatabase(callback) {
        if(!Config.CREATE_COLLECTIONS) return callback();
        collections(this.db, () => {
           callback();
        });
    }

}

module.exports = new Database();