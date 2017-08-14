const express = require('express');
const app = express();
const routes = require('./routes');

const port = process.env.PORT || 8080;
app.use('/api', routes);

app.listen(port, () => {
    console.log(`RESTful API started at port ${port}`);
});