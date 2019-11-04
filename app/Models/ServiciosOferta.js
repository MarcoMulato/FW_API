'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ServiciosOferta extends Model {
    static get table () {
        return 'servicios_ofertas'
      }

      static get primaryKey () {
        return 'id'
      }
}

module.exports = ServiciosOferta
