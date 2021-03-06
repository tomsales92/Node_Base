const express = require('express');
const app = express();

const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(express.static('Assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(3000, ()=>{console.log('Servidor rodando')})