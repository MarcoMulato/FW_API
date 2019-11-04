'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ServiciosTintoreria extends Model {
    static get table () {
        return 'servicios_tintorerias'
      }

      static get primaryKey () {
        return 'id'
      }
}

module.exports = ServiciosTintoreria
