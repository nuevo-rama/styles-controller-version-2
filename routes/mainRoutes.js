//CARPETA DE RECURSOS PARA INDEX
const express = require("express");
const mainController = require("../controllers/mainController");

const router = express.Router();


router.get("/", mainController.index); //Referenciar el método del controlador en la ruta

module.exports = router;