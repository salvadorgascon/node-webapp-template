const path = require('path')
const express = require('express');

const port = 8000;

const app = express();

app.use(express.static(path.join(__dirname,'../build')));

app.listen(port, () => {
    console.log(`App listening to ${port}....`)
    console.log('Press Ctrl+C to quit.')
});