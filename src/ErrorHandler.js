export default (err, req, res, next) => {
    res.status(422).json({error: err});
    next();
};