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
      table.string('fecha_pedido')
      table.string('status')
      table.text('datos_ropa','longtext')
      table.text('servicios','longtext')
      table.string('tipo_entrega')
      table.string('precio')
      table.string('coordenadas_lavanderia')
      table.string('coordenadas_usuario')
      table.string('coordenadas_repartidor')
      table.string('direccion_usuario')
      table.string('direccion_lavanderia')
      table.text('indicaciones','longtext')
      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidosSchema
