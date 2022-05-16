const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const app = express();
const middleware = require('./middleware/index');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(middleware.decodeToken)

//Rutas
app.get('/prueba',(req, res) => {
    console.log(req.user);
    res.send('Api con Firebase Admin');
})

app.use('/users',require('./routes/users.routes'));



app.listen(process.env.PORT,()=>{
    console.log("Corriendo servidor en  " + process.env.PORT)
})