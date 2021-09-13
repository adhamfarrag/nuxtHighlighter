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
app.all('/highlights', (req, res) => {
<<<<<<< HEAD
  res.setHeader('Access-Control-Allow-Origin', '*')
=======
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
>>>>>>> 2289e07409169f8717afc221d93ddabf654c392f
  res.json({ highlights: highlights })
})

app.post('/highlight', function (req, res) {
<<<<<<< HEAD
  res.setHeader('Access-Control-Allow-Origin', '*')
=======
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
>>>>>>> 2289e07409169f8717afc221d93ddabf654c392f
  highlights.push(req.body)
  if (!highlights) {
    res.status(404).end('Highlight do not exsist')
  } else {
    res.status(200).end('Highlight Added')
  }
})

module.exports = app
