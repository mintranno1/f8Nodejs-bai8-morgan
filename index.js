const express = require('express');
const app = express();
const port = 7000;

var morgan = require('morgan');
app.use(morgan('combined'));

app.get('/', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    return res.send('Hello!')
});

app.listen(port, () => console.log(`Example app listening at http://localhost: ${port}`))