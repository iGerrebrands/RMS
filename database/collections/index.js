const Collections = require('./Collections');

const users = require('./models/users');
const projects = require('./models/projects');


module.exports = (db, callback) => {
    Collections.setDatabase(db);
    Collections.addCollection({ name: "users", obj: users});
    Collections.addCollection({ name: "projects", obj: projects});
    Collections.setupCollections(callback);
};