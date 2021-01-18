
exports.up = async knex => knex.schema.createTable('posts', table => {
    table
      .uuid('user_id')
      .references('users.id')
      .notNull()
  
    table.string('text')
    table.string('date')
    table.integer('likes')
  })

exports.down = async knex => knex.schema.dropTableIfExists('posts')
