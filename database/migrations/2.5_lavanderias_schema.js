'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LavanderiasSchema extends Schema {
  up () {
    this.create('lavanderias', (table) => {
      table.increments()
      table.string('nombre_lavanderia').notNullable()
      table.string('direccion').notNullable()
      table.string('telefono').notNullable()
      table.string('correo_electronico').notNullable()
      table.string('contraseña').notNullable()
      table.text('fotografias','longtext').notNullable()
      table.string('horario_semana')
      table.string('horario_sabado')
      table.string('coordenadas')
      table.timestamps()
    })
  }

  down () {
    this.drop('lavanderias')
  }
}

module.exports = LavanderiasSchema
