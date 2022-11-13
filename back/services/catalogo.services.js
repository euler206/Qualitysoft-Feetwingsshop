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
    const product = new Catalogo({
      _id:id,
      nombre:data.nombre,
      genero:data.genero,
      marca:data.marca,
      precio:data.precio,
      imagen:data.imagen,
      cantidad:data.cantidad,
      descripcion:data.descripcion,
      reviews:[]
    })
    await Catalogo.findByIdAndUpdate(id, product,{new:true}).then(data =>{ 
      if (!data){
        this.data = { Message: "El producto actulizar no existe", id };
        }
        else {
          this.data = { Message: "El producto ha sido actualizado", id };
        }; 
    }).catch(error =>{
      this.data = error
    });
    return this.data

  }
   

  async delete(id) {
    await Catalogo.findByIdAndRemove(id).then((result) => {
      if (!result) {
        this.data = { Message: "No existe el Id", id };
      } else {
        this.data = { Message: "El producto fue eliminado correctamente"};
      }
    });

    return this.data;
  }

  async create(data) {
    const product = new Catalogo({
    nombre:data.nombre,
    genero:data.genero,
    marca:data.marca,
    precio:data.precio,
    imagen:data.imagen,
    cantidad:data.cantidad,
    descripcion:data.descripcion,
    reviews:[]
      /*nombre:data.nombre,
      genero:data.genero,
      marca:data.marca,
      precio:data.precio,
      imagen:data.imagen,
      descripcion:data.descripcion,
      inventario:data.inventario,
      review:0,
      numCalificaciones:[],
      opiniones:[]*/
    })
    await product.save().then(data =>{
      if (!data){
        this.data = { Message: "El producto no se registro" };
        }
        else {
          this.data = { Message: "El producto ha sido registrado"};
        };
    });
    return this.data
  
  }
}

module.exports = CatalogoServices;
