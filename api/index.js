const express = require('express')
const cors = require('cors')
const app = express()

let highlights = [{ IdOne: 'TEXT_CONTECT' }]
const corsOptions = {
  origin: 'https://nuxthighlighter.vercel.app/',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.all('/highlights', (req, res) => {
  res.json({ highlights: highlights })
})

app.post('/highlight', function (req, res) {
  highlights.push(req.body)
  if (!highlights) {
    res.status(404).end('Highlight do not exsist')
  } else {
    res.status(200).end('Highlight Added')
  }
})

module.exports = app
