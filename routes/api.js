const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).send(`
        <div>
            <h1>RMS API</h1>
        </div>
    `);
});

module.exports = router;