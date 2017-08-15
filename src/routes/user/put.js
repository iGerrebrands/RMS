import User from '../../models/User';

export default (req, res) => {
    User.update({ _id: req.body._id }, { $set: req.body})
        .then((result) => result.nModified ? res.status(200).json({data: "updated"}) : res.status(400).json({data: "Not updated"}));
};