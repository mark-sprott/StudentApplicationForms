
exports.up = (knex, Promise) => {
    return knex.schema.createTableIfNotExists('shareholder_details', (table) => {
      table.increments('id').primary()
      table.string('first_name')
      table.string('last_name')
      table.increments('shareholder_number')

    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('shareholder_details')
  }
