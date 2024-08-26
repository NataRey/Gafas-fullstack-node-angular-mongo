import multer from 'multer';
import fs from 'fs-extra';
import ModeloProducto from "../models/modeloProducto.js";

const ControladorProductos = {
  crearProducto: async (solicitud, respuesta) => {
    try {
      const almacenamiento = multer.diskStorage({
        destination: 'imagenes',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      });
      const carga = multer({ storage: almacenamiento }).single('imagen');
      carga(solicitud, respuesta, async (error) => {
        if (error) {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al subir imagen gorra',
            datos: null,
          });
        } else {
          const nuevaProductos = new ModeloProducto({
            marca: solicitud.body.marca,
            nombre: solicitud.body.material,
            precio: solicitud.body.precio,
            color: solicitud.body.color,
            imagen: solicitud.file.filename,
          });
          const ProductosCreada = await nuevaProductos.save();
          if (ProductosCreada._id) {
            respuesta.json({
              resultado: 'bien',
              mensaje: 'Producto creado',
              datos: ProductosCreada._id,
            });
          }
        }
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al crear Productos',
        datos: error,
      });
    }
  },
  leerProducto: async (solicitud, respuesta) => {
    try {
      const ProductoEncontrado = await ModeloProducto.findById(solicitud.params.id);
      if (ProductoEncontrado._id) {
      respuesta.json({
        resultado: 'bien',
        mensaje: 'Producto leído',
        datos: ProductoEncontrado,
      });
      }
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al leer Producto',
        datos: error,
      });
    }
  },
  leerProductos: async (solicitud, respuesta) => {
    try {
      const todosLosProductos = await ModeloProducto.find();
      respuesta.json({
        resultado: 'bien',
        mensaje: 'Productos leídos',
        datos: todosLosProductos,
      });
     
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al leer todas los Productos',
        datos: error,
      });
    }
  },
  actualizarProducto: async (solicitud, respuesta) => {
    try {
      const ProductoActualizado = await ModeloProducto.findByIdAndUpdate(
        solicitud.params.id,solicitud.body
      );
      if (ProductoActualizado._id) {
        respuesta.json({
        resultado: 'bien',
        mensaje: 'Producto actualizado',
        datos: ProductoActualizado._id,
      });
    }
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al actualizar Producto',
        datos: error,
      });
    }
  },
  eliminarProducto: async (solicitud, respuesta) => {
    try {
      const ProductoEliminada = await ModeloProducto.findByIdAndDelete(
        solicitud.params.id
      );
      respuesta.json({
        resultado: 'bien',
        mensaje: 'Producto eliminado',
        datos: null,
      });
     
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error al eliminar Productos',
        datos: error,
      });
    }
  },
};

  
  export default ControladorProductos;