const mongoose = require("mongoose")
const { Schema, model } = mongoose

const LoginSchema = new Schema({
    user: String,
    contraseña:String,
    Rol:String,
    
})

const Login = model("usuarios",LoginSchema)

module.exports = Login