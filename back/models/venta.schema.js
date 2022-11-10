const mongoose = require("mongoose");
const { Schema, model } = mongoose;

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
  confirmado: Boolean,
  detalleCompra: [
    {
      cantidad: Number,
      idProducto: {
        type: Schema.Types.ObjectId,
        ref: "Producto",
      },
    },
  ],  
  valor: Number,
});

const Venta = model("Venta", ventaSchema);

module.exports = Venta;
