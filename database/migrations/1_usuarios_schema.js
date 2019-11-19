'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuariosSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('nombres').notNullable()
      table.string('apellidos').notNullable()
      table.string('correo_electronico').notNullable().unique()
      table.string('contraseña').notNullable()
      table.string('telefono').notNullable()
      table.string('direccion').notNullable()
      table.string('coordenadas')
      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuariosSchema
