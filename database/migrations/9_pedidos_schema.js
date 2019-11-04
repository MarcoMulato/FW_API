'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidosSchema extends Schema {
  up () {
    this.create('pedidos', (table) => {
      table.increments()
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios')
      table.integer('lavanderia_id').unsigned().references('id').inTable('lavanderias')
      table.integer('repartidor_id').unsigned().references('id').inTable('repartidores')
      table.integer('costo').notNullable()
      table.string('fecha_pedido').notNullable()
      table.string('status').nullable()
      table.string('datos_ropa').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidosSchema
