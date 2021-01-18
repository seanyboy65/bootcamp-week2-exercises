exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table.string('firstname')
  table.string('lastname')
  table.string('DOB')
  table.string('password')
  table.string('bio')
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
