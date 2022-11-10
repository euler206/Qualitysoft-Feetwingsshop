const express = require('express');
const catalogoRouter = require("./catalogo.router")
const ventaRouter = require("./venta.router")
const loginRouter = require("./login.router")
const registrarRouter = require("./registrar.router")

function routerApi(app){
    const router = express.Router();
    app.use("/api/v1", router)
    router.use("/catalogo", catalogoRouter)
    router.use("/ventas", ventaRouter)
    router.use("/login", loginRouter)
    router.use("/registrar", registrarRouter)

    
    
  }
  
  module.exports = routerApi;
