const express = require("express")
const path = require('path')
const morgan = require('morgan')

//instalaciones
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')



//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))



//Rutas
app.use(require('./routes/entries.routers'))


//404 errores
app.use((req,res)=>{
    res.status(404).render('404')
})

//Inicio del app
app.listen(app.get('port'), ()=>{
    console.log("Server on port", app.get('port'))
})


