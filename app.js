const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`RESTful API started at port ${port}`);
});