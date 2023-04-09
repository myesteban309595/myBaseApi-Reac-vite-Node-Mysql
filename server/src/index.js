const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const expressJwt = require('express-jwt');
const todosController = require('./controllers/todos.controller');
const pozosController = require('./controllers/pozo.controller');

const config = require('./config/config')
const app = express();

const dotenv = require('dotenv');


const PORT = config.module.PORT


dotenv.config();

const {
    API_PORT = 9000,
    SERVER_TAG = 'API EXPRESS'
} = process.env;

//static files
app.use(express.static('public'))
//middleware
app.use(cors()); //comunica la api con el servidor y ciertos dominios
app.use(morgan('dev'))
app.use(express.json());
//Rutas
app.use('/api/todos', todosController);
app.use('/api/pozos', pozosController);

// app.use('/login', require('./routes/login.route'));


app.listen(PORT, ()=> {
    console.log(`conectado en el puerto: ${PORT}`);
})