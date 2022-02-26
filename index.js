const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 5000

var app = express() 
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs') // using hadlebars
app.set('views', 'views') // folder with views named views lol

app.use(todoRoutes)

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

// app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + 'public/index.html')
// })