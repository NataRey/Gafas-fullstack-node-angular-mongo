import mongoose from "mongoose";
mongoose

.connect(process.env.RUTA_BASE)
.then((dato)=>{
    console.log( "esta conectado a la base de datos");

}).catch((error)=>{
    console.log( error, "no se conecto a la base de datos");
});