const {randomBytes} = require("crypto")
const express = require("express")
const cors = require("cors")
const axios = require("axios")


const app = express();
const PORT = 4001

app.use(cors())
app.use(express.json());

const comments = {};

app.get('/posts/:id/comments', (req, res, next) => {
    const {id} = req.params
    res.send(comments[id] || [])
})

app.post('/posts/:id/comments', (req, res, next) => {
    const id = randomBytes(4).toString('hex');
    const {content} = req.body; 
    const postId = req.params.id
    if(typeof comments[postId] == 'undefined') {
        comments[postId] = []
    }
    comments[postId].push({id, content})

    res.status(201).send(comments[postId])

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})