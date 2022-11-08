const Venta = require("../models/venta.schema");

class VentaServices {
  constructor() {
    this.data = [];
  }

  async Todos() {
    await Venta.find({}).then((result) => {
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
    await Venta.create(data).then((result) => {
      this.data = result;
    });
    return this.data;
  }
}

module.exports = VentaServices;
