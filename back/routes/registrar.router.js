const express = require("express");
const router = express.Router();
const RegistrarServices = require("../services/registrar.service");

const services = new RegistrarServices();

router.get("/", async (req, res) => {
  const data = await services.Todos();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await services.buscarPorid(id);
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
