const express = require ("express");
const app = express ();
//Resuelve rutas
const path = require ("path"); 
//Para que pueda resolver siempre la ruta a public
const publicPath = path.resolve(__dirname, "./public"); 


//Para poder usar los  recursos estaticos de la carpeta public
app.use (express.static(publicPath)); 


//SERVIDOR
app.listen (3000, () =>
console.log ("Servidor corriendo")
);


app.set("views", path.join(__dirname, "views"));

//MOTOR DE VISTAS EJS
app.set("view engine", "ejs")

//RUTAS
const indexRouter = require("./routes/mainRoutes")  
const productsRouter = require("./routes/productsRoutes")

//Middleware a nivel aplicación
//La función se ejecuta cada vez que la aplicación recibe cualquier tipo de solicitud
app.use("/", indexRouter);
app.use("/", productsRouter);


