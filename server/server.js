const express = require('express')

const app = express()

app.get('/', function(req, res) {
  res.end('<h1>hello</h1>')
})

app.listen(9093)