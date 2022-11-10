const mongoose = require("mongoose")
const { Schema, model } = mongoose

const registrarSchema = new Schema({
    user: String,
    contraseña:String,
    Rol:String,
    Nombres:String,
    Apellidos:String,
    Celular:String,
    Sexo:String,

    
})

const registrar = model("registrar",registrarSchema)

module.exports = registrar