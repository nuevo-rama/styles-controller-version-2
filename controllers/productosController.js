//CONTROLADOR PARA ...funciones que se van a encargar de manejar a los productos
const productosController = {

    index: (req,res)=>{
        res.render("./products/listadoProductos")
    },

    product: (req,res)=>{
        res.render("./products/product", {stylesheet:"/css/styleProduct.css"})
    },
    
    

    detalleProducto: function (req,res) {
        res.send ("Bienvenidos al detalle de un producto" + req.params.idProducto)
    },

    detalleProductoComentario: function (req,res) {
        if (req.params.idComentario==undefined) {
            res.send ("Bienvenidos al detalle de un producto" + req.params.idProducto); 
        } else {
            res.send ("Bienvenidos al comentario del producto" + req.params.idProducto + 
            "y estás en el comentario " + req.params.idComentario); 
        }
    }
}

module.exports=productosController; //se exportará hacia routes