module.exports = (req, res) => {
    const id = parseInt(req.params.id);
    res.status(200).json({
        data: [
            {
                id: id
            }
        ]
    });
};