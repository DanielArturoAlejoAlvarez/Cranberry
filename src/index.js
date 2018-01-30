//REQUIREMENTS
const cors = require('cors')
const express = require('express')
const dirPath = require('path')
const app = express()
//const indexRoutes = require('./routes/index')
const tasksRoutes = require('./routes/tasks')

const config = require('./config')

//SETTINGS
app.set('views', dirPath.join(__dirname, 'views'))
app.set('port', config.port)
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')


//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//ROUTING
//app.use(indexRoutes)
app.use('/api', tasksRoutes)

//STATIC FILES
app.use(express.static(dirPath.join(__dirname, 'dist')))

//SERVER
app.listen(app.get('port'), ()=>{
    console.log('SERVER RUNNING IN PORT', app.get('port'))
})