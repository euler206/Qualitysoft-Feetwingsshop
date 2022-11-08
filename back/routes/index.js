const express = require('express');
const catalogoRouter = require("./catalogo.router")


const ventaRouter = require("./venta.router")

function routerApi(app){
    const router = express.Router();
    app.use("/api/v1", router)
    router.use("/catalogo", catalogoRouter)
    


    router.use("/ventas", ventaRouter)
    
  }
  
  module.exports = routerApi;
