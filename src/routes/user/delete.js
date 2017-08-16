import User from '../../models/User';

export default (req, res, next) => {

    User.findOneAndRemove({ _id: req.params.id })
        .then((result) => res.status(200).json({data: { message: "Deleted"}}))
        .catch(next);

};