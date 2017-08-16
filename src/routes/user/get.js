import User from '../../models/User';
import { ObjectId } from 'mongodb';

export default (req, res, next) => {

    const objectId = ObjectId.isValid(req.params.id) ? req.params.id : 0;
    const filter = req.params.id ? {_id: ObjectId(objectId) } : {};

    User.find(filter)
        .select({name: true, email: true})
        .then((result) => {
            res.status(200).json({data: result});
        })
        .catch(next);

};