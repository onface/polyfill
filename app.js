var express = require('express')
var app = express()
var proxy = require('express-http-proxy');

app.use(proxy('https://cdn.polyfill.io/'))

var port = 6231
app.listen(port, function () {
    console.log('http://127.0.0.1:' + port)
})
