const express = require("express")
const path = require('path')

const morgan = require('morgan')
const session = require('express-session')
const flash = require('connect-flash')

//instalaciones
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')



//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(session({
    saveUninitialized: false,
    resave:false,
    secret:'mysecretkey_boodah'
}))
app.use(flash())



//Rutas
app.use(require('./routes/index'))


//404 errores
app.use((req,res)=>{
    res.status(404).send('Error 404')
})

//Inicio del app
app.listen(app.get('port'), ()=>{
    console.log("Server on port", app.get('port'))
})


