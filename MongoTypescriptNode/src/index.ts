import express from "express";


//initializations
const app = express();

//settings
app.set('port', 3300);


//middlewares

// routes

//static files

//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
});