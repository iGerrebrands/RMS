import User from '../../models/User';

export default (req, res) => {

    User.remove({ _id: req.params.id })
        .then((result) => result.result.n ? res.status(200).json({data: "Deleted"}) : res.status(400).json({data: "Not deleted"}));

};