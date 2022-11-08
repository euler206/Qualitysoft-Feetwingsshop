const mongoose = require("mongoose")
const { Schema, model } = mongoose

const ventaSchema = new Schema({
    fecha: String,
    idCliente: String,
    /*
    cliente:{
        id:String,
        nombre:String,
        apellido:String,
        email:String,
        telefono:String,
        direccion:String,
        ciudad:String,
        estado:String,
        codigoPostal:String,
        pais:String
    },
    */
    confirmado:Boolean,
    detalleCompra:[{
        idProducto:String,
        cantidad:Number,
        precio:Number,
        subtotal:(function(){
            return this.cantidad * this.precio
        })()
    }],
    valor : Number
    
    // valor   NO FUNCA ====>  QUEDA EN REMOJO
    /*
    valor: (function(){
        let total = 0
        this.detalleCompra.forEach(element => {
            total += element.subtotal
        });
        return total
    })()
    */

    /*
    valor: this.detalleCompra.forEach(element => {
            total += element.precio * element.cantidad;
        })()
    */
})

const Venta = model("Venta",ventaSchema)

module.exports = Venta