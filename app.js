var express = require('express')
var app = express()

app.listen(3000, function () {
    console.log("server on");
})

// static 디렉토리
app.use(express.static('public'))

// url routing
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/main.html')
})
