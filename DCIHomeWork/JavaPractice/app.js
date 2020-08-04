// let express = require('express')
// let app = express()

//const e = require("express");

// let server = app.listen(5050, function(){console.log('Node server is running...........')})


// app.get('/', function(req,res){
//     res.send('<h1> Hello Team</h1>')
// })

// app.get('/about', function(req,res){
//     res.send('<h1>About</h1>')
// })

// app.post('action.js', function(req, res){
//     res.send('Post request')
// })

// app.put('/update-data')

let express = require('express')
const bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
extended:false
}))

app.get('/', function(req, res)
{
    res.sendFile('/home/dci/DCI/HussnainAhmed/DCIHomeWork/JavaPractice/index.html')
})

app.post('/submit', function(req, res)
{
    console.log(req.body.lastname)
    res.send('Hi ' + req.body.lastname)
})

const port = 5080
let server = app.listen(port, function(){
    console.log ('Node server is listening to the port:' + port)
})