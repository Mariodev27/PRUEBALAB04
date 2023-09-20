const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Directorio donde se encuentran las vistas

// Datos de ejemplo: clientes y productos
const clientes = [
  { id: 1, nombre: 'Cliente 1' },
  { id: 2, nombre: 'Cliente 2' },
  { id: 2, nombre: 'Cliente 3' },
  // Agrega más clientes si es necesario
];

const productos = [
  { id: 1, nombre: 'Producto 1' },
  { id: 2, nombre: 'Producto 2' },
  { id: 2, nombre: 'Producto 3' },
  // Agrega más productos si es necesario
];

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.render('menu');
  });
// Rutas para mostrar clientes y productos en vistas HTML
app.get('/clientes', (req, res) => {
  res.render('clientes', { clientes });
});

app.get('/productos', (req, res) => {
  res.render('productos', { productos });
});

// Iniciar el servidor en el puerto 5000
app.listen(port, () => {
  console.log(`La aplicación está corriendo en el puerto ${port}`);
});