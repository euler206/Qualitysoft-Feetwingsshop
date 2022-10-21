const express = require('express');
const catalogoRouter = require("./catalogo.router")

function routerApi(app){
    const router = express.Router();
    app.use("/api/v1", router)
    router.use("/catalogo", catalogoRouter)
    
  }
  
  module.exports = routerApi;
