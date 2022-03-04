const { Router } = require('express')
const Slist = require('../models/Slist')
const router = Router()

router.get('/', async (req, res) => {
    var stems = await Slist.find({}).lean() // array of all
    stems = stems.reverse()

    res.render('index', {
        title: 'shopping list',
        isIndex: true,
        stems
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'add item',
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const stem = new Slist({ // model Slist
        title: req.body.title
    })

    await stem.save() // async returns promise
    res.redirect('/')
})

router.post('/complete', async (req, res) => {
    const stem = await Slist.findById(req.body.idee)

    // !!'true' = true; !'true' = false
    stem.completed = !!req.body.completed
    await stem.save()

    res.redirect('/')

})

router.post('/additem', async (req, res) => {
    const stem = new Slist({
        title: req.body.inpitem
    })

    await stem.save()
    res.redirect('/')
})

module.exports = router