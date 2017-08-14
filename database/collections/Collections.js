const Promise = require('promise');
let instance = null;

class Collections {

    constructor() {
        this.db = null;
        this.collections = [];
    }

    setDatabase(db) {
        this.db = db;
    }

    addCollection(collection) {
        let createCollection = Promise.denodeify((name, obj) => this.db.createCollection(name, obj));
        this.collections.push(createCollection(collection.name, collection.obj));
    }

    setupCollections(callback) {
        Promise.all(this.collections)
            .then(values => {
                values.forEach((value) => {
                    console.log(`Collection ${value.s.name} Created.`);
                });
                callback();
            })
            .catch((err) => console.log(err));
    }

}

module.exports = new Collections();