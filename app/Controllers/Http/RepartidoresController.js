'use strict'
const Repartidor = use('App/Models/Repartidor')
class RepartidoresController {
      async index ({response}) {
        let repartidores = await Repartidor.all()
    
        return response.json(repartidores)
      }
      async show ({params, response}) {
        const repartidor = await Repartidor.find(params.id)
    
        return response.json(repartidor)
      }
      async store ({request, response}) {
        const repartidorInfo = request.only(['nombres', 'apellidos', 'correo_electronico', 'contraseña','telefono','direccion'])
    
        const repartidor = new Repartidor()
        repartidor.nombres = repartidorInfo.nombres
        repartidor.apellidos = repartidorInfo.apellidos
        repartidor.correo_electronico = repartidorInfo.correo_electronico
        repartidor.contraseña = repartidorInfo.contraseña
        repartidor.telefono = repartidorInfo.telefono
        repartidor.foto_perfil = repartidorInfo.foto_perfil
        repartidor.status = repartidorInfo.status
    
        await repartidor.save()
    
        return response.status(201).json(repartidor)
      }
      async delete ({params, response}) {
        const repartidor = await Repartidor.find(params.id)
        if (!repartidor) {
          return response.status(404).json({data: 'Resource not found'})
        }
        await repartidor.delete()
    
        return response.status(204).json(null)
      }
      async login({request, response, auth}) {
        const {correo_electronico, contraseña} = request.all();
        const repartidor = await auth.authenticator('jwt3').attempt(correo_electronico, contraseña);
        const user_id = await Repartidor.query().select('id').where('correo_electronico','=',correo_electronico).fetch()
        Object.assign(repartidor,user_id.toJSON())
        console.log("AL SALIR", user_id.toJSON())
        return response.json(repartidor);
      }
      async password ({ auth, request,response ,params}) {
        const {correo_electronico, contraseña, contraseña_nueva} = request.all();
        console.log("correo:", correo_electronico)
        console.log("nueva:", contraseña_nueva)
        const repartidor = await auth.authenticator('jwt3').attempt(correo_electronico, contraseña);
        const repartidorcontra = await Repartidor.find(params.id)
        const repartidorInfo = request.only([,'contraseña'])
        if(!repartidor) {
            return response.status(404).json({data: "Paciente no encontrado."})
        }
        repartidorcontra.contraseña = contraseña_nueva
    
        await repartidorcontra.save()
    
        return response.status(200).json(repartidorcontra)
      }
      async changeStatus ({request,response ,params}) {
        const repartidorInfo = request.only(['status'])
        const repartidor = await Repartidor.find(params.id)
        if(!repartidor) {
            return response.status(404).json({data: "Repartidor no encontrado."})
        }
        repartidor.status = repartidorInfo.status
        await repartidor.save()
        return response.status(200).json(repartidor)
      }
}

module.exports = RepartidoresController
