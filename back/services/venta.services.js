const Catalogo = require("../models/catalogo.schema");
const Venta = require("../models/venta.schema");

class VentaServices {
  constructor() {
    this.data = [];
  }

  async Todos() {
    await Venta.find({})
      .populate("detalleCompra.idProducto")
      .then((result) => {
        this.data = result;
      });

    return this.data;
  }

  async buscarPorid(id) {
    await Venta.findById(id).then((result) => {
      if (!result) {
        this.data = { Message: "No existe el Id", id };
      } else {
        this.data = result;
      }
    });

    return this.data;
  }

  async update(id, data) {
    await Venta.findByIdAndUpdate(id, data).then((result) => {
      this.data = result;
    });
    return this.data;
  }

  async delete(id) {
    await Venta.findByIdAndDelete(id).then((result) => {
      if (!result) {
        this.data = { Message: "No existe el Id", id };
      } else {
        this.data = { Message: "Venta eliminada", id };
      }
    });
  }
  async create(data) {
    const { detalleCompra } = data;
    const venta = await Venta.create(data);
    if (venta) {
      detalleCompra.map(async (item) => {
        let cantidadVendida = item.cantidad;
        const buscar = await Catalogo.findById(item.idProducto);
        const updateInventario = await {
          _id: buscar._id,
          nombre: buscar.nombre,
          genero: buscar.genero,
          marca: buscar.marca,
          precio: buscar.precio,
          imagen: buscar.imagen,
          reviews: buscar.reviews,
          cantidad: buscar.cantidad - cantidadVendida,
        };

        const actualizar = await Catalogo.findByIdAndUpdate(
          updateInventario._id,
          updateInventario,
          { new: true }
        );

        if (actualizar) {
          this.data = { Message: "Venta Registrada, Inventario actualizado" };
        } else {
          this.data = { Message: "No se pudo Actualizar Inventario" };
        }
      });
    } else {
      this.data = { Message: "No se pudo Registrar la venta" };
    }
    return this.data;
  }
}

module.exports = VentaServices;
