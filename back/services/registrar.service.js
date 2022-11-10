const registrar = require("../models/registrar.schema");

class RegistrarServices {
  constructor() {
    this.data = [];
  }

  async Todos() {
    await registrar.find({}).then((result) => {
      this.data = result;
    });

    return this.data;
  }

  async buscarPorid(id) {
    await registrar.findById(id).then((result) => {
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

module.exports = RegistrarServices;
