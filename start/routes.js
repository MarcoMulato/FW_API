'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.group(() => {
  //USUARIOS
  Route.post('usuarios', 'UsuarioController.store')
  Route.get('usuarios', 'UsuarioController.index')
  Route.get('usuarios/:id', 'UsuarioController.show')
  Route.post('usuariosLogin','UsuarioController.login')
  Route.put('usuarios_password/:id', 'UsuarioController.password')
  Route.delete('usuarios/:id', 'UsuarioController.delete')
  //LAVANDERIAS
  Route.post('lavanderias', 'LavanderiaController.store')
  Route.get('lavanderias', 'LavanderiaController.index')
  Route.get('lavanderias/:id', 'LavanderiaController.show')
  Route.post('lavanderiasLogin','LavanderiaController.login')
  Route.put('lavanderias_password/:id', 'LavanderiaController.password')
  Route.delete('lavanderias/:id', 'LavanderiaController.delete')
  //REPARTIDORES
  Route.post('repartidores', 'RepartidoresController.store')
  Route.get('repartidores', 'RepartidoresController.index')
  Route.get('repartidores/:id', 'RepartidoresController.show')
  Route.post('repartidoresLogin','RepartidoresController.login')
  Route.put('repartidores_password/:id', 'RepartidoresController.password')
  Route.put('repartidores_status/:id', 'RepartidoresController.changeStatus')
  Route.delete('repartidores/:id', 'RepartidoresController.delete')
  //PEDIDOS
  Route.post('pedidos', 'PedidoController.storeUser')
  Route.get('pedidos', 'PedidoController.index')
  Route.get('pedidos_repartidor/:id', 'PedidoController.showDelivery')
  Route.get('pedidos_usuario/:id', 'PedidoController.showUser')
  Route.get('pedidos_lavanderia/:id', 'PedidoController.showLaundry')
  Route.post('pedidos_lavanderia/:id','PedidoController.storeLaundry')
  Route.post('pedidos_repartidor/:id','PedidoController.storeDelivery')
  Route.delete('pedidos/:id', 'PedidoController.delete')
  ////SERVICIOS////
  //LAVANDERIA
  Route.post('servicioLavanderia', 'ServiciosLavanderiaController.store')
  Route.get('servicioLavanderia', 'ServiciosLavanderiaController.index')
  Route.get('servicioLavanderia/:id', 'ServiciosLavanderiaController.show')
  Route.put('servicioLavanderia/:id', 'ServiciosLavanderiaController.update')
  Route.delete('servicioLavanderia/:id', 'ServiciosLavanderiaController.delete')
  //OFERTAS
  Route.post('servicioOferta', 'ServiciosOfertaController.store')
  Route.get('servicioOferta', 'ServiciosOfertaController.index')
  Route.get('servicioOferta/:id', 'ServiciosOfertaController.show')
  Route.put('servicioOferta/:id', 'ServiciosOfertaController.update')
  Route.delete('servicioOferta/:id', 'ServiciosOfertaController.delete')
  //OTROS
  Route.post('servicioOtro', 'ServiciosOtroController.store')
  Route.get('servicioOtro', 'ServiciosOtroController.index')
  Route.get('servicioOtro/:id', 'ServiciosOtroController.show')
  Route.put('servicioOtro/:id', 'ServiciosOtroController.update')
  Route.delete('servicioOtro/:id', 'ServiciosOtroController.delete')
  //PLANCHADO
  Route.post('servicioPlanchado', 'ServiciosPlanchadoController.store')
  Route.get('servicioPlanchado', 'ServiciosPlanchadoController.index')
  Route.get('servicioPlanchado/:id', 'ServiciosPlanchadoController.show')
  Route.put('servicioPlanchado/:id', 'ServiciosPlanchadoController.update')
  Route.delete('servicioPlanchado/:id', 'ServiciosPlanchadoController.delete')
  //TINTORERIA
  Route.post('servicioTintoreria', 'ServiciosTintoreriaController.store')
  Route.get('servicioTintoreria', 'ServiciosTintoreriaController.index')
  Route.get('servicioTintoreria/:id', 'ServiciosTintoreriaController.show')
  Route.put('servicioTintoreria/:id', 'ServiciosTintoreriaController.update')
  Route.delete('servicioTintoreria/:id', 'ServiciosTintoreriaController.delete')
}).prefix('api/v1')
