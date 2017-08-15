import User from '../../models/User';

export default (req, res) => {

    const user = new User(req.body);

    user.save()
        .then(() => {
            res.status(200).json({data: {saved: true}});
        })
        .catch((err) => {
            res.status(404).json({data: {saved: false}});
        });

};