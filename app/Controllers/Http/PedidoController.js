'use strict'
const Pedido = use('App/Models/Pedido')
class PedidoController {
      async index ({response}) {
        let pedidos = await Pedido.all()
    
        return response.json(pedidos)
      }
      async showDelivery ({params, response}) {
        const pedido = await Pedido.query().select('*').where('repartidor_id','=',params.id).fetch()
    
        return response.json(pedido)
      }
      async showUser ({params, response}) {
        const pedido = await Pedido.query().select('*').where('usuario_id','=',params.id).fetch()
    
        return response.json(pedido)
      }
      async showLaundry ({params, response}) {
        const pedido = await Pedido.query().select('*').where('lavanderia_id','=',params.id).fetch()
    
        return response.json(pedido)
      }
      async storeUser ({request, response}) {
        const pedidoInfo = request.only(['usuario_id','lavanderia_id', 'fecha_pedido', 'status', 'datos_ropa','servicios','coordenadas_usuario','direccion_usuario','indicaciones'])
    
        const pedido = new Pedido()
        pedido.usuario_id = pedidoInfo.usuario_id
        pedido.lavanderia_id = pedidoInfo.lavanderia_id
        pedido.fecha_pedido = pedidoInfo.fecha_pedido
        pedido.status = pedidoInfo.status
        pedido.datos_ropa = pedidoInfo.datos_ropa
        pedido.servicios = pedidoInfo.servicios
        pedido.coordenadas_usuario = pedidoInfo.coordenadas_usuario
        pedido.direccion_usuario = pedidoInfo.direccion_usuario
        pedido.indicaciones = pedidoInfo.indicaciones
    
        await pedido.save()
    
        return response.status(201).json(pedido)
      }
      async storeLaundry({request,response ,params}) {
        const pedidoInfo = request.only(['repartidor_id'])
        const pedido = await Pedido.find(params.id)
        if(!pedido) {
            return response.status(404).json({data: "Pedido no encontrado."})
        }
        pedido.repartidor_id = pedidoInfo.repartidor_id
        pedido.status = "Enviando repartidor"
        await pedido.save()
        return response.status(200).json(pedido)
      }
      async storeDelivery({request,response ,params}) {
        const pedidoInfo = request.only(['costo'])
        const pedido = await Pedido.find(params.id)
        if(!pedido) {
            return response.status(404).json({data: "Pedido no encontrado."})
        }
        pedido.costo = pedidoInfo.costo
        pedido.status = "Llevando a lavanderia"
        await pedido.save()
        return response.status(200).json(pedido)
      }
      async delete ({params, response}) {
        const pedido = await Pedido.find(params.id)
        if (!pedido) {
          return response.status(404).json({data: 'Resource not found'})
        }
        await pedido.delete()
    
        return response.status(204).json(null)
      }
}

module.exports = PedidoController
