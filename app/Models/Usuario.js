'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class Usuario extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeSave', async (usuarioInstance) => {
      if (usuarioInstance.dirty.contraseña) {
        usuarioInstance.contraseña = await Hash.make(usuarioInstance.contraseña)
      }
    })
  }
    static get table () {
        return 'usuarios'
      }

      static get primaryKey () {
        return 'id'
      }
}

module.exports = Usuario
