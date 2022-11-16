const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ventaSchema = new Schema({
  fecha: String,
  idCliente:{
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
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
