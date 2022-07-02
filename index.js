const express = require('express')
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const todo = require('./routes/todoRoute')


const Todo = require('./models/todo');

mongoose.connect('mongodb://localhost:27017/toDolist', {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true})
       .then(()=>{
           console.log('Connection open')
       })
       .catch(err=>{
           console.log(err)
       })

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"))
db.once('open', ()=>{
    console.log("Database Connected")
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))

app.use('/todos', Todo)




app.listen(3000, ()=>{
    console.log('app is listening on PORT 3000')
})