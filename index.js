const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')

const app = express()

// connect to stylesheet
app.use(express.static(__dirname + '/style'))
app.use(express.static(__dirname + '/script'))

// necessary for nesting data
app.use(bodyParser())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// View engine:
nunjucks.configure('views', {
  express: app,
  autoexcape: true
})
app.set('view engine', 'html')


// Routes:
app.get('/', (req, res) => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = String(today.getFullYear())
  const yyyymmdd = `${yyyy}/${mm}/${dd}`
  res.render('form', { "date": yyyymmdd })
})

app.post('/', (req, res) => {
  res.send(req.body)
})


app.listen(4000)