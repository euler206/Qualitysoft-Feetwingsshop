const mongoose = require("mongoose")
const { Schema, model } = mongoose

const usuariosSchema = new Schema({
    correo: {
        type:String,
        unique:true
    },
    pass:String,
    Rol:String,
    nombres:String,
    apellidos:String,
    ceular:String,
    genero:String,
    
})

const usuarios = model("Usuario",usuariosSchema)

module.exports = usuarios