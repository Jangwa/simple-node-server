import config from './config';
const express = require('express');
const app = express();
const path = require('path');
const configData = config();
app.use(express.static(__dirname + '/static'));
app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(`${__dirname}/index.html`));
});
app.listen(configData.PORT);
console.log('\n\n\n========\n|  SERVER IS RUNNING ON PORT : ', configData.PORT, '\n=================\n\n\n');
