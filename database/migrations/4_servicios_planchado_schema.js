'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiciosPlanchadoSchema extends Schema {
  up () {
    this.create('servicios_planchados', (table) => {
      table.increments()
      table.integer('lavanderia_id').unsigned().references('id').inTable('lavanderias')
      table.text('servicio','longtext').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('servicios_planchados')
  }
}

module.exports = ServiciosPlanchadoSchema
