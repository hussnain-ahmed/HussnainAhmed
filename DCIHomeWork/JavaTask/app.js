let express = require('express')
const bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
extended:false
}))

app.get('/', function(req, res)
{
    res.sendFile('/home/dci/DCI/HussnainAhmed/DCIHomeWork/JavaTask/index.html')
})

app.post('/submit', function(req, res)
{
    console.log(req.body.name)
    console.log(req.body.email)
    console.log(req.body.message)
    console.log(req.body.age)
    res.send(`<h1> Your Data</h1>
            <p>Name: ${req.body.name}</p> 
            <p>Email: ${req.body.email}</p>
            <p>Message: ${req.body.message}
            <p>Age: ${req.body.age}<p>`)
})

const port = 5060;
let server = app.listen(port, function(req, res){
    console.log ('Node server is listening to the port:' + port)
 })

