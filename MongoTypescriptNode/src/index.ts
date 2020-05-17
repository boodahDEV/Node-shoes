import express from "express";
import exphbs from "express-handlebars";
import path from "path";
//importing routes
import IndexRoutes from './routes'

//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3300);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    // defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));
app.set('view engine', '.hbs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false})); //para interpretar datos

// routes
app.use('/api', IndexRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')))

//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
});