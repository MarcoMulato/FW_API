'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ServiciosOtro extends Model {
    static get table () {
        return 'servicios_otros'
      }

      static get primaryKey () {
        return 'id'
      }
}

module.exports = ServiciosOtro
