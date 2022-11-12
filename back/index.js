require("./config/mongoConnect")
const express = require('express');
const app = express();
const routerApi = require('./routes');
const cors = require("cors")

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola my server en Express');
  });
  
  routerApi(app);
  
  app.listen(port);
console.log('Server is running in Port', process.env.PORT);