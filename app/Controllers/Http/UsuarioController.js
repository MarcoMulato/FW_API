'use strict'
const Usuario = use('App/Models/Usuario')
class UsuarioController {
  async index ({response}) {
    let usuarios = await Usuario.all()

    return response.json(usuarios)
  }
  async show ({params, response}) {
    const usuario = await Usuario.find(params.id)

    return response.json(usuario)
  }
  async store ({request, response}) {
    const usuarioInfo = request.only(['nombres', 'apellidos', 'correo_electronico', 'contraseña','telefono','direccion'])

    const usuario = new Usuario()
    usuario.nombres = usuarioInfo.nombres
    usuario.apellidos = usuarioInfo.apellidos
    usuario.correo_electronico = usuarioInfo.correo_electronico
    usuario.contraseña = usuarioInfo.contraseña
    usuario.telefono = usuarioInfo.telefono
    usuario.direccion = usuarioInfo.direccion

    await usuario.save()

    return response.status(201).json(usuario)
  }
  async delete ({params, response}) {
    const usuario = await Usuario.find(params.id)
    if (!usuario) {
      return response.status(404).json({data: 'Resource not found'})
    }
    await usuario.delete()

    return response.status(204).json(null)
  }
  async login({request, response, auth}) {
    const {correo_electronico, contraseña} = request.all();
    const usuario = await auth.attempt(correo_electronico, contraseña);
    const user_id = await Usuario.query().select('id').where('correo_electronico','=',correo_electronico).fetch()
    Object.assign(usuario,user_id.toJSON())
    console.log("AL SALIR", user_id.toJSON())
    return response.json(usuario.token);
  }
  async password ({ auth, request,response ,params}) {
    const {correo_electronico, contraseña, contraseña_nueva} = request.all();
    console.log("correo:", correo_electronico)
    console.log("nueva:", contraseña_nueva)
    const usuario = await auth.attempt(correo_electronico, contraseña);
    const usuariocontra = await Usuario.find(params.id)
    const usuarioInfo = request.only([,'contraseña'])
    if(!usuario) {
        return response.status(404).json({data: "Paciente no encontrado."})
    }
    usuariocontra.contraseña = contraseña_nueva

    await usuariocontra.save()

    return response.status(200).json(usuariocontra)
  }
}

module.exports = UsuarioController
