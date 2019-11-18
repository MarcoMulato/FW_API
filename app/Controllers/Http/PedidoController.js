'use strict'
const Pedido = use('App/Models/Pedido')
class PedidoController {
      async index ({response}) {
        let pedidos = await Pedido.all()
    
        return response.json(pedidos)
      }
      async show ({params, response}) {
        const pedido = await Pedido.find(params.id)
    
        return response.json(pedido)
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
        const pedidoInfo = request.only(['usuario_id','lavanderia_id','tipo_entrega', 'fecha_pedido', 'status', 'datos_ropa','servicios','coordenadas_usuario','direccion_usuario','coordenadas_lavanderia','direccion_lavanderia','indicaciones'])
    
        const pedido = new Pedido()
        pedido.usuario_id = pedidoInfo.usuario_id
        pedido.lavanderia_id = pedidoInfo.lavanderia_id
        pedido.fecha_pedido = pedidoInfo.fecha_pedido
        pedido.status = pedidoInfo.status
        pedido.datos_ropa = pedidoInfo.datos_ropa
        pedido.servicios = pedidoInfo.servicios
        pedido.tipo_entrega = pedidoInfo.tipo_entrega
        pedido.coordenadas_usuario = pedidoInfo.coordenadas_usuario
        pedido.direccion_usuario = pedidoInfo.direccion_usuario
        pedido.coordenadas_lavanderia = pedidoInfo.coordenadas_lavanderia
        pedido.direccion_lavanderia = pedidoInfo.direccion_lavanderia
        pedido.indicaciones = pedidoInfo.indicaciones
    
        await pedido.save()
    
        return response.status(201).json(pedido)
      }
      async storeLaundry({request,response ,params}) {
        const pedidoInfo = request.only(['repartidor_id','status'])
        const pedido = await Pedido.find(params.id)
        if(!pedido) {
            return response.status(404).json({data: "Pedido no encontrado."})
        }
        pedido.repartidor_id = pedidoInfo.repartidor_id
        pedido.status = pedidoInfo.status
        await pedido.save()
        return response.status(200).json(pedido)
      }
      async storeDeliveryStatus({request,response ,params}) {
        const pedidoInfo = request.only(['status'])
        const pedido = await Pedido.find(params.id)
        if(!pedido) {
            return response.status(404).json({data: "Pedido no encontrado."})
        }
        pedido.status = pedidoInfo.status
        await pedido.save()
        return response.status(200).json(pedido)
      }
      async storeDeliveryCost({request,response ,params}) {
        const pedidoInfo = request.only(['precio'])
        const pedido = await Pedido.find(params.id)
        if(!pedido) {
            return response.status(404).json({data: "Pedido no encontrado."})
        }
        pedido.precio = pedidoInfo.precio
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
