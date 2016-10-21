
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('order_detail', table => {
    table.increments('id').primary()
    table.integer('order_id').references('order.id')
    table.integer('coffee_id').references('coffee.id')
    table.integer('quantity')
    table.integer('milk')
    table.integer('sugar')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order_detail')
};