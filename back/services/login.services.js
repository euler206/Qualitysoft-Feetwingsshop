const login = require("../models/login.schema");

class LoginServices {
  constructor() {
    this.data = [];
  }

  async Todos() {
    await login.find({}).then((result) => {
      this.data = result;
    });

    return this.data;
  }

  async buscarPorid(id) {
    await login.findById(id).then((result) => {
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

module.exports = LoginServices;
