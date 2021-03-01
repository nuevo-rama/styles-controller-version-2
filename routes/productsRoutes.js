//CARPETA DE RECURSOS PARA PRODUCTOS

const express = require("express");
const productosController = require("../controllers/productosController");

const router = express.Router();

router.get("/listadoProductos", productosController.index); //accedemos al método que queremos que sea ejecutado al llamar a la ruta
router.get("/product", productosController.product);

router.get("/:idProducto", productosController.detalleProducto); //va a mostral el detalle de un producto por id
router.get("/:idProducto/comentarios", productosController.detalleProductoComentario); //va a mostrar el comentario de un producto por id

module.exports = router;