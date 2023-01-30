const {randomBytes} = require("crypto")
const express = require("express")
const cors = require("cors")
const axios = require("axios")


const app = express();
const PORT = 4000

app.use(express.json());

const posts = {};

app.get('/posts', (req, res, next) => {
    res.send(Object.values(posts))
})

app.post('/posts', (req, res, next) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body; 
    posts[id] = {id, title}

    res.status(201).send(posts[id])

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})