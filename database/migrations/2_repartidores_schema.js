'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RepartidoresSchema extends Schema {
  up () {
    this.create('repartidores', (table) => {
      table.increments()
      table.string('nombres').notNullable()
      table.string('apellidos').notNullable()
      table.string('correo_electronico').notNullable().unique()
      table.string('contraseña').notNullable()
      table.string('telefono').notNullable()
      table.text('foto_perfil','longtext')
      table.string('status')
      table.string('coordenadas')
      table.string('matricula')
      table.timestamps()
    })
  }

  down () {
    this.drop('repartidores')
  }
}

module.exports = RepartidoresSchema
