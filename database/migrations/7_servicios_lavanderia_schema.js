'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiciosLavanderiaSchema extends Schema {
  up () {
    this.create('servicios_lavanderias', (table) => {
      table.increments()
      table.integer('lavanderia_id').unsigned().references('id').inTable('lavanderias')
      table.string('servicio').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('servicios_lavanderias')
  }
}

module.exports = ServiciosLavanderiaSchema
