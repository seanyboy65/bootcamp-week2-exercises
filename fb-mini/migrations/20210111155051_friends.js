
exports.up = async knex => knex.schema.createTable('friends', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
      .uuid('user1_id')
      .references('users.id')
      .notNull()
    table
      .uuid('user2_id')
      .references('users.id')
      .notNull()
  
    table.string('status')
  })

exports.down = function(knex) {
  
};
