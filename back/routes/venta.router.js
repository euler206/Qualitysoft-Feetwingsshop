const express = require("express");
const router = express.Router();
const VentaServices = require("../services/venta.services");

const services = new VentaServices();

router.get("/", async (req, res) => {
  const data = await services.Todos();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await services.buscarPorid(id);
  res.json(data);
});

router.get("/cliente/:id", async (req, res) => {
  const { id } = req.params;
  const data = await services.buscarPorIdCliente(id);
  res.json(data);
});

router.post("/", async (req, res) => {
  const { body } = req;
  const data = await services.create(body);
  res.json(data);
});

router.put("/", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const data = await services.update(id, body);
  res.json(data);
});

router.delete("/", async (req, res) => {
  const { id } = req.params;
  const data = await services.delete(id);
  res.json(data);
});

module.exports = router;
