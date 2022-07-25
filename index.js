const express = require('express')
const app = express()

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send('Hello Worsld')
})

app.listen(3000, () => {
    console.log('Server running at 3000')
    console.log('his')
})