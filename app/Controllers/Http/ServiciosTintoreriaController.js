'use strict'
const Servicio = use('App/Models/ServiciosTintoreria')
class ServiciosTintoreriaController {
  async index ({response}) {
    let servicios = await Servicio.all()

    return response.json(servicios)
  }
  async show ({params, response}) {
    const servicio = await Servicio.find(params.id)

    return response.json(servicio)
  }
  async store ({request, response}) {
    const servicioInfo = request.only(['lavanderia_id', 'servicio'])

    const servicioC = new Usuario()
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

module.exports = ServiciosTintoreriaController
