const express = require('express')
const path = require('path')
const app = express()
const bio = require('./cvPreview')
const port = 3000

// here both app.use are middleWare which extract body from actual request and add it(body) into request object
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  // console.log("Here is File Location :" + __filename);
  // console.log("Here is Directory Location :" + __dirname);
  // res.sendFile(__dirname + "/cv.html") 
  res.sendFile(path.join(__filename,'..', 'cv.html')) 
})

app.post('/',(req, res) => {
  // console.log(req.body);
  // res.sendFile(path.join(__dirname , 'biodata.html' ))
  // res.send("<h1> Full Name : " + req.body.name + " kumar<h1>")
  // or
  // res.send(`<h1> Full Name : ${req.body.name} kumar<h1>`)
  res.send(bio(req))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});