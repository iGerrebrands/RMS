import User from '../../models/User';

export default (req, res, next) => {
    User.findOneAndUpdate({ _id: req.body._id }, { $set: req.body})
        .then((result) => res.status(200).json({data: { message: "Updated" }}))
        .catch(next);
};