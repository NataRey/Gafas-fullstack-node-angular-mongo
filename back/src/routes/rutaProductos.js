import { Router } from 'express';
import ControladorProductos from '../controllers/controladorProducto.js';


const enrutadorProductos = Router ();
enrutadorProductos.post('/', ControladorProductos.crearProducto);
enrutadorProductos.get('/:id', ControladorProductos.leerProducto);
enrutadorProductos.get('/', ControladorProductos.leerProductos);
enrutadorProductos.put('/:id', ControladorProductos.actualizarProducto);
enrutadorProductos.delete('/:id', ControladorProductos.eliminarProducto);

export default enrutadorProductos;
  