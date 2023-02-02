const express = require('express')
const axios = require('axios')

const app = express()
const PORT = 4005

app.use(express.json())

app.post('/events', async (req, res) => {
    const event = req.body;

    await axios.post('http://localhost:4000/events', event)
    await axios.post('http://localhost:4001/events', event)
    await axios.post('http://localhost:4002/events', event)
})


app.listen(PORT, () => {
    console.log('Event-bus listening on port ' + PORT)
})