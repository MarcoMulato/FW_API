'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuariosLavanderiaSchema extends Schema {
  up () {
    this.create('usuarios_lavanderias', (table) => {
      table.increments()
      table.string('nombres').notNullable()
      table.string('apellidos').notNullable()
      table.string('correo_electronico').notNullable()
      table.string('contraseña').notNullable()
      table.integer('lavanderia_id').unsigned().references('id').inTable('lavanderias')
      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios_lavanderias')
  }
}

module.exports = UsuariosLavanderiaSchema
