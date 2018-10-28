const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

var hostname = "127.0.0.1";
var port = process.env.PORT || 3000;

app.listen(port, hostname, ()=>{
    console.log('server is running...');
});

app.get('/', (req,res)=>{
    res.sendFile( __dirname + '/' + 'index.html');
});

app.get('/get', (req,res)=>{
    var name = req.query['name'];
    res.send(name != null ? req.query : 'please pass a name on the query string or in the request body');
});

app.post('/post', (req,res)=>{
    response = {
        name: req.body.name,
        password: req.body.password
    };
    res.send(JSON.stringify(response));
});
