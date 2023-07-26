const express = require('express');
const routes = require('./indexRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

//Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});