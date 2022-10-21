const express = require('express');
const app = express();
const routerApi = require('./routes');
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola my server en Express');
  });
  
  routerApi(app);
  
  app.listen(port);
console.log('Server is running in Port', port);