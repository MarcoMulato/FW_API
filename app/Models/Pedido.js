'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pedido extends Model {
    static get table () {
        return 'pedidos'
      }

      static get primaryKey () {
        return 'id'
      }
}

module.exports = Pedido
