'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class Lavanderia extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeSave', async (lavanderiaInstance) => {
      if (lavanderiaInstance.dirty.contraseña) {
        lavanderiaInstance.contraseña = await Hash.make(lavanderiaInstance.contraseña)
      }
    })
  }
    static get table () {
        return 'lavanderias'
      }

      static get primaryKey () {
        return 'id'
      }
}

module.exports = Lavanderia
