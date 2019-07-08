
const express = require('express');
const app = express();
const path = require('path');


//设置路径
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, '../')));


app.listen(3000);