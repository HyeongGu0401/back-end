var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.listen(3000, function () {
    console.log("server on");
})

// static 디렉토리
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

// url routing
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/main.html')
});

// POST 요청
app.post('/email_post', function (req, res) {
    console.log(req.body.email)
    res.render('email.ejs', {
        'email': req.body.email
    })
})
