'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiciosTintoreriasSchema extends Schema {
  up () {
    this.create('servicios_tintorerias', (table) => {
      table.increments()
      table.integer('lavanderia_id').unsigned().references('id').inTable('lavanderias')
      table.text('servicio','longtext').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('servicios_tintorerias')
  }
}

module.exports = ServiciosTintoreriasSchema
