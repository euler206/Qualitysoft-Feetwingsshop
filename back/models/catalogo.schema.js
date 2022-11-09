const mongoose = require("mongoose")
const { Schema, model } = mongoose

const catalogoSchema = new Schema({
    nombre: String,
    genero:String,
    marca:String,
    precio:String,
    imagen:String,
    cantidad:Number,
    reviews:[]
})

const Catalogo = model("Producto",catalogoSchema)

module.exports = Catalogo