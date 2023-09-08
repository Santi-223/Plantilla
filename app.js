//importando librerias o paquetes
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express()

const port = 8182;

app.use(express.static('public'))

app.set('views', path.join(__dirname + '/public/views'))


//Configuración del directorio que guardará los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials');

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('accso', {
        titulo: 'Inicio',
        nombre: 'Santiago Munera'
    })
})

app.get('/Inicio', (req, res) => {
    res.render('Inicio')
})

app.get('/ActualizarContrasena', (req, res) => {
    res.render('ActualizarContrasena')
})

app.get('/Insumos', (req, res) => {
    res.render('Insumos')
})

app.get('/AgregarInsumo', (req, res) => {
    res.render('AgregarInsumo')
})

app.get('/ModificarInsumo', (req, res) => {
    res.render('ModificarInsumo')
})

app.get('/Clientes', (req, res) => {
    res.render('Clientes')
})

app.get('/AgregarCliente', (req, res) => {
    res.render('AgregarCliente')
})

app.get('/ModificarCliente', (req, res) => {
    res.render('ModificarCliente')
})

app.get('/ActualizarCategoriaInsumos', (req, res) => {
    res.render('ActualizarCategoriaInsumos')
})

app.get('/ActualizarCatProductos', (req, res) => {
    res.render('ActualizarCatProductos')
})

app.get('/ActualizarPedidos', (req, res) => {
    res.render('ActualizarPedidos')
})

app.get('/actualizarPermisos', (req, res) => {
    res.render('actualizarPermisos')
})

app.get('/actualizarProductos', (req, res) => {
    res.render('actualizarProductos')
})

app.get('/actualizarProveedores', (req, res) => {
    res.render('actualizarProveedores')
})

app.get('/ActualizarRoles', (req, res) => {
    res.render('ActualizarRoles')
})

app.get('/actualizarUsuario', (req, res) => {
    res.render('actualizarUsuario')
})

app.get('/AgregarCategoria', (req, res) => {
    res.render('AgregarCategoria')
})

app.get('/AgregarOrdenProduccion', (req, res) => {
    res.render('AgregarOrdenProduccion')
})

app.get('/AgregarVenta', (req, res) => {
    res.render('AgregarVenta')
})

app.get('/CategoriaInsumos', (req, res) => {
    res.render('CategoriaInsumos')
})

app.get('/categoriaProductos', (req, res) => {
    res.render('categoriaProductos')
})

app.get('/gestionCompras', (req, res) => {
    res.render('gestionCompras')
})

app.get('/gestionPermisos', (req, res) => {
    res.render('gestionPermisos')
})

app.get('/gestionProductos', (req, res) => {
    res.render('gestionProductos')
})

app.get('/gestionProveedores', (req, res) => {
    res.render('gestionProveedores')
})

app.get('/gestionroles', (req, res) => {
    res.render('gestionroles')
})

app.get('/gestionUsuario', (req, res) => {
    res.render('gestionUsuario')
})

app.get('/OrdenProduccion', (req, res) => {
    res.render('OrdenProduccion')
})

app.get('/pedidos', (req, res) => {
    res.render('pedidos')
})

app.get('/RecuperarContrasena', (req, res) => {
    res.render('RecuperarContrasena')
})

app.get('/RegistrarCatProducto', (req, res) => {
    res.render('RegistrarCatProducto')
})

app.get('/registrarCompras', (req, res) => {
    res.render('registrarCompras')
})

app.get('/registrarPermisos', (req, res) => {
    res.render('registrarPermisos')
})

app.get('/registrarProductos', (req, res) => {
    res.render('registrarProductos')
})

app.get('/registrarProveedores', (req, res) => {
    res.render('registrarProveedores')
})

app.get('/registrarUsuario', (req, res) => {
    res.render('registrarUsuario')
})

app.get('/registroPedidos', (req, res) => {
    res.render('registroPedidos')
})

app.get('/registroRoles', (req, res) => {
    res.render('registroRoles')
})

app.get('/Ventas', (req, res) => {
    res.render('Ventas')
})

app.listen(port, () => {
    console.log('Escuchando por el puerto ' + port)
})