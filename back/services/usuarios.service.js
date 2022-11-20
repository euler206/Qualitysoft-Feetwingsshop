const usuarios = require("../models/usuarios.schema");
const bcrypt = require("bcryptjs");

class UsuariosServices {
  constructor() {
    this.data = [];
  }

  async Todos() {
    await usuarios.find({}).then((result) => {
      this.data = result;
    });

    return this.data;
  }

  async buscarPorid(id) {
    await usuarios.findById(id).then((result) => {
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
    const passHash = await bcrypt.hash(data.pass, 10);
    const newUser = await new usuarios({
      correo: data.correo,
      pass: passHash,
      Rol: data.Rol,
      nombres: data.nombres,
      apellidos: data.apellidos,
      celular: data.celular,
      genero: data.genero,
    });
    await newUser
      .save()
      .then((data) => {
        if (!data) {
          this.data = { Message: "No se pudo Registrar el usuario" };
        } else {
          this.data = { Message: "Registro Exitoso" };
        }
      })
      .catch((err) => {
        this.data = { Message: err };
      });
    return this.data;
  }

  async login(data) {
    const { correo, pass } = data;
    await usuarios
      .findOne({ correo })
      .then(async (result) => {
        if (result) {
          const palabraSecretaValida = await bcrypt.compare(pass, result.pass);

          if (palabraSecretaValida) {
            this.data = result;
          } else {
            this.data = { Message: "Error al validar Credenciales, P" };
          }
        } else {
          this.data = { Message: "Error al validar Credenciales" };
        }
      })
      .catch((err) => {
        this.data = err;
      });
    return this.data;
  }
}

module.exports = UsuariosServices;
