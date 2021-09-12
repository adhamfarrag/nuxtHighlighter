const express = require('express')
const app = express()

let highlights = [{ IdOne: 'TEXT_CONTECT' }]

app.use(express.json())
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
