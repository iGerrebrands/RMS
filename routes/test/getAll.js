module.exports = (req, res) => {
    res.status(200).json({
        data: [
            {
                id: 0
            },
            {
                id: 1
            },
            {
                id: 2
            }
        ]
    });
};