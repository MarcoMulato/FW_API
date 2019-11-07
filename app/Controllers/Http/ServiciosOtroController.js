'use strict'
const Servicio = use('App/Models/ServiciosOtro')
class ServiciosOtroController {
  async index ({response}) {
    let servicios = await Servicio.all()

    return response.json(servicios)
  }
  async show ({params, response}) {
    const servicio = await Servicio.query().select('*').where('lavanderia_id','=',params.id).fetch()

    return response.json(servicio)
  }
  async store ({request, response}) {
    const servicioInfo = request.only(['lavanderia_id', 'servicio'])

    const servicioC = new Servicio()
    servicioC.lavanderia_id = servicioInfo.lavanderia_id
    servicioC.servicio = servicioInfo.servicio

    await servicioC.save()

    return response.status(201).json(servicioC)
  }
  async delete ({params, response}) {
    const servicio = await Servicio.find(params.id)
    if (!servicio) {
      return response.status(404).json({data: 'Resource not found'})
    }
    await servicio.delete()

    return response.status(204).json(null)
  }
  async update ({params, request, response}) {
    const servicioInfo = request.only(['servicio'])

    const servicioC = await Servicio.find(params.id)
    if (!servicioC) {
      return response.status(404).json({data: 'Resource not found'})
    }
    servicioC.servicio = servicioInfo.servicio

    await servicioC.save()

    return response.status(200).json(servicioC)
  }
}

module.exports = ServiciosOtroController
