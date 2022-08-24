
import express from 'express'
const router = express.Router()

let users = require('../../../data/user')

router.get('/users', (req, res) => {
    res.json(users)
})

router.get('/users/:id', (req, res) => {
    const found = users.some((user: { id: number }) => user.id === parseInt(req.params.id))

    if (found) {
        const userData = users.filter((user: { id: number }) => user.id === parseInt(req.params.id))
        res.json(userData)
    } else {
        res.sendStatus(404)
    }
})

router.post('/users', (req, res) => {
    const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email
    }
    if (!newUser.name || !newUser.email) {
        return res.sendStatus(404)
    }
    users.push(newUser)
    res.json(users)
})

router.put('/users/:id', (req, res) => {
    const found = users.some((user: { id: number }) => user.id === parseInt(req.params.id))

    if (found) {
        const updateUser = req.body;

        users.forEach((user: { id: number, name: string, email: string }) => {
            if (user.id === parseInt(req.params.id)) {
                user.name = updateUser.name ? updateUser.name : user.name
                user.email = updateUser.email ? updateUser.email : user.email
                res.json({
                    msg: "User Updated",
                    user
                })
            }
        })
    }
})

router.delete('/users/:id', (req, res) => {
    const found = users.some((user: { id: number }) => user.id === parseInt(req.params.id))

    if (found) {
        users = users.filter((user: { id: number }) => user.id !== parseInt(req.params.id))
        res.json({
            msg: 'User deleted.',
            users
        })
    } else {
        res.sendStatus(400)
    }
})

module.exports = router