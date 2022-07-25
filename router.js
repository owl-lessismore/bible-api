const express = require('express')
const router = express.Router()

const emailRouter = require('./routes/email.js')

router.use('/email', advocacyRouter)

module.exports = router
