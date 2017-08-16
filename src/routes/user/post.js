import User from '../../models/User';

export default (req, res, next) => {

    const user = new User(req.body);

    user.save()
        .then(() => {
            res.status(200).json({data: {saved: true}});
        })
        .catch(next);

};