'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UsuariosLavanderia extends Model {
    static get table () {
        return 'usuarios_lavanderias'
      }

      static get primaryKey () {
        return 'id'
      }
}

module.exports = UsuariosLavanderia
