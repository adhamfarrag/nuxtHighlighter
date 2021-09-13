const express = require('express')
const app = express()

let highlights = [{ IdOne: 'TEXT_CONTECT' }]

app.use(express.json())
app.all('/highlights', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  res.json({ highlights: highlights })
})

app.post('/highlight', function (req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  highlights.push(req.body)
  if (!highlights) {
    res.status(404).end('Highlight do not exsist')
  } else {
    res.status(200).end('Highlight Added')
  }
})

module.exports = app
