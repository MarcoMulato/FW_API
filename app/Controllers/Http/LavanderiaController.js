'use strict'
const Lavanderia = use('App/Models/Lavanderia')
class LavanderiaController {
    async index ({response}) {
        let lavanderias = await Lavanderia.all()
    
        return response.json(lavanderias)
      }
      async show ({params, response}) {
        const lavanderia = await Lavanderia.find(params.id)
    
        return response.json(lavanderia)
      }
      async store ({request, response}) {
        const lavanderiaInfo = request.only(['nombre_lavanderia','correo_electronico', 'contraseña','telefono','direccion','fotografias','horario_semana','horario_sabado','coordenadas'])
    
        const lavanderia = new Lavanderia()
        lavanderia.nombre_lavanderia = lavanderiaInfo.nombre_lavanderia
        lavanderia.direccion = lavanderiaInfo.direccion
        lavanderia.telefono = lavanderiaInfo.telefono
        lavanderia.correo_electronico = lavanderiaInfo.correo_electronico
        lavanderia.contraseña = lavanderiaInfo.contraseña
        lavanderia.fotografias = lavanderiaInfo.fotografias
        lavanderia.horario_semana = lavanderiaInfo.horario_semana
        lavanderia.horario_sabado = lavanderiaInfo.horario_sabado
        lavanderia.coordenadas = lavanderiaInfo.coordenadas
    
        await lavanderia.save()
    
        return response.status(201).json(lavanderia)
      }
      async delete ({params, response}) {
        const lavanderia = await Lavanderia.find(params.id)
        if (!lavanderia) {
          return response.status(404).json({data: 'Resource not found'})
        }
        await lavanderia.delete()
    
        return response.status(204).json(null)
      }
      async login({request, response, auth}) {
        const {correo_electronico, contraseña} = request.all();
        const lavanderia = await auth.authenticator('jwt2').attempt(correo_electronico, contraseña);
        const user_id = await Lavanderia.query().select('id').where('correo_electronico','=',correo_electronico).fetch()
        Object.assign(lavanderia,user_id.toJSON())
        console.log("AL SALIR", user_id.toJSON())
        return response.json(lavanderia);
      }
      async password ({ auth, request,response ,params}) {
        const {correo_electronico, contraseña, contraseña_nueva} = request.all();
        console.log("correo:", correo_electronico)
        console.log("nueva:", contraseña_nueva)
        const lavanderia = await auth.authenticator('jwt2').attempt(correo_electronico, contraseña);
        const lavanderiacontra = await Lavanderia.find(params.id)
        if(!lavanderia) {
            return response.status(404).json({data: "Paciente no encontrado."})
        }
        lavanderiacontra.contraseña = contraseña_nueva
    
        await lavanderiacontra.save()
    
        return response.status(200).json(lavanderiacontra)
      }
}

module.exports = LavanderiaController
