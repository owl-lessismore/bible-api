import express from 'express'

const app = express()

const userRoute = require('./routes/api/users/user')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(userRoute)

app.listen(3000, () => {
    console.log('Server is listening to port 3000')
})