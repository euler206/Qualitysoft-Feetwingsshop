const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
        message:"Ruta de Catalogo",
        code:202
    });
  });

  module.exports = router;