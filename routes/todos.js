const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router()

router.get('/', async (req, res) => {
    const todos = await Todo.find({}).lean() // array of all

    res.render('index', {
        title: 'TODO LIST',
        isIndex: true,
        todos
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'CRETAE TODO',
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const todo = new Todo({ // model Todo
        title: req.body.title
    })

    await todo.save() // async returns promise
    res.redirect('/')
})

module.exports = router