import express from 'express'

const app = express()

app.get('/', (req, res) => {

})

app.get('/users', (req, res) => {
    res.json({
        "name": "Marco",
        "surname": "Cleito"
    })
})

app.listen(3333)