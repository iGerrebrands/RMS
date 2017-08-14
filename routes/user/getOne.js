const Collections = require('../../database/collections/Collections');
const mongo = require('mongodb');


// Refactor: Change way to filter on collections make this easier also code the handling of responses and change db models to response models because not everything can be returned safely
module.exports = (req, res) => {
    const id = req.params.id;
    Collections.db.collection('users').find({ '_id' : new mongo.ObjectID(id) }).toArray((err, items) => {
        if (err) {
            res.status(400).json({
                message: err
            });
        }
        res.status(200).json({
            data: items
        });
    });
};