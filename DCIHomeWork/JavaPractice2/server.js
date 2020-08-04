const express = require('express')
const server = express()
const bodyParser = require('body-parser')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: false
}))


server.get('/', function (req, res) {
    res.sendFile('/home/dci/DCI/HussnainAhmed/DCIHomeWork/JavaPractice2/index.html')
})

server.post('/submit', function (req, res) {
    console.log(req.body)
    let response = `<form>
                        <div>
                            <fieldset>
                                <legend>Data used for registration</legend>
                                    <label>First Name:</label> ${req.body.firstname}
                                    <br><br>
                                    <label>Last Name:</label> ${req.body.lastname}
                                    <br><br>
                                    <label>Gender:</label> ${req.body.gender}
                                    <br> <br>
                                    <label>Age:</label> ${req.body.age}
                                    <br><br>
                                    <label>Email Address:</label> ${req.body.email}
                                    <br>
                            </fieldset>
                        </div>
                    </form>`
    res.send(response)
})
const port = 7070
server.listen(port, function(){
    console.log(`Port: ${port}`)
})




/* <h1>Your Data</h1>
                <p>Name: ${req.body.name}</p>
                <p>Email: ${req.body.email}</p>
                <p>Message: ${req.body.message}</p>
                <p>Age: ${req.body.age}</p> */