const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 5000

var app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbseng', hbs.engine)
app.set('view engine', 'hbseng') // using hadlebars
app.set('views', 'views') // folder with views names views lol

async function start() {
    try {
        await mongoose.connect('mongodb+srv://tabby:flowless@cluster0.8qffk.mongodb.net/todos?retryWrites=true&w=majority', {

        })
        app.listen(PORT, () => {
            console.log('LSNING ON PORT ' + PORT)
        })
    } catch (err) {
        console.log(err)
    }
}

// var server = app.listen(PORT, () => {
//     console.log('LSNING ON PORT ' + PORT)
// })

start()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html')
})