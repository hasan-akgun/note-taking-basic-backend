const express = require("express");
const app = express();
const notesRoute = require('./src/routes/notesRoute');


app.set('view engine', 'pug')
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/notes', notesRoute);



app.get('/', (req,res)=>{
  res.render('index');
})

try {
  app.listen(3000, ()=>{
    console.log("server running")
  })  
} catch (error) {
  console.log(error);  
}
