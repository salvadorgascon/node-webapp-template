const path = require('path')
const express = require('express');

const app = express();

app.use(express.static("../build"));

app.listen(8000, () => {
    console.log(`App listening to 8000....`)
    console.log('Press Ctrl+C to quit.')
});