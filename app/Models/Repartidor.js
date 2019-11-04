'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')
class Repartidores extends Model {
    static boot () {
      super.boot()
      this.addHook('beforeSave', async (repartidorInstance) => {
        if (repartidorInstance.dirty.contraseña) {
          repartidorInstance.contraseña = await Hash.make(repartidorInstance.contraseña)
        }
      })
    }
    static get table () {
        return 'repartidores'
      }

      static get primaryKey () {
        return 'id'
      }
}

module.exports = Repartidores
