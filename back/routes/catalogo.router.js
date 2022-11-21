const express = require("express");
const router = express.Router();
const CatalogoServices = require("../services/catalogo.services");

const services = new CatalogoServices();

//Ver lista de productos
router.get("/", async (req, res) => {
  const data = await services.Todos();
  res.json(data);
});
router.get("/sinStock", async (req, res) => {
  const data = await services.sinStock();
  res.json(data);
});

//Ver producto por id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await services.buscarPorid(id);
  res.json(data);
});

//Crear un nuevo producto
router.post("/", async (req, res, next) => {
  const { body } = req;
  const data = await services.create(body);
  res.json(data);
});

//Actualizar un producto
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const data = await services.update(id, body);
  res.json(data);
});

//Eliminar producto
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await services.delete(id);
  res.json(data);
});

module.exports = router;
