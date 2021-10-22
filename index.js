const express = require("express");
const routerApi = require("./routes");

const {logErrors, errorHandler} =require('./middlewares/error.handler')

const app = express();
const port = 3000;
app.use(express.json());



app.get('/', (req, res)=>{
  res.send('Hola mi Server en express');
});


app.listen(port, ()=>{
  console.log('mi port' +port);
});

app.use(logErrors);
app.use(errorHandler);

routerApi(app);
