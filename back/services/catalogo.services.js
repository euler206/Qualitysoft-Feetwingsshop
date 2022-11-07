const Catalogo = require("../models/catalogo.schema");

class CatalogoServices {
  constructor() {
    this.data = [];
  }

  async Todos() {
    await Catalogo.find({}).then((result) => {
      this.data = result;
    });

    return this.data;
  }

  async buscarPorid(id) {
    await Catalogo.findById(id).then((result) => {
      if (!result) {
        this.data = { Message: "No existe el Id", id };
      } else {
        this.data = result;
      }
    });

    return this.data;
  }

  async update(id, data) {
    return {
      data: "Update por ID",
    };
  }

  async delete(id) {
    return {
      data: "Delete por ID",
    };
  }
  async create(data) {
    return {
      data: "Crear producto",
    };
  }
}

module.exports = CatalogoServices;
