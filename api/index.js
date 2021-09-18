const express = require('express')
const cors = require('cors')
const app = express()

const corsOptions = {
  origin: 'https://nuxthighlighter.vercel.app',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

let highlights = [{ ktpz7cuxj07vjorxaeb: 'Phasellus aliquam tristique arcu' }]

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.all('/highlights', (req, res) => {
  res.json({ highlights: highlights })
})

app.post('/highlight', function (req, res) {
  const newHighlight = req.body

  const matchedHighlight = highlights.find(
    (highlight) =>
      highlight[Object.keys(highlight)[0]] ==
      newHighlight[Object.keys(newHighlight)[0]]
  )

  if (!matchedHighlight) {
    highlights.push(req.body)
    res.status(200).send(Object.keys(req.body))
  } else {
    res.status(201).send(Object.keys(matchedHighlight))
  }
})

app.get('/highlights/:id', (req, res) => {
  const { id } = req.params
  const foundHighlight = highlights.find(
    (highlight) => Object.keys(highlight) == id
  )

  if (!foundHighlight) {
    res.status(404).send('highlight not found.').end()
  }

  res.status(200).send(foundHighlight[Object.keys(foundHighlight)[0]])
})

module.exports = app
