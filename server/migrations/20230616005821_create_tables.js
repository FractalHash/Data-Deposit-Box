/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id');
      table.string('email').notNullable();
      table.string('username').notNullable();
      table.string('hashedpass').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
    .createTable('questions', (table) => {
      table.increments('id').primary();
      table
      .integer('user_id')
      .unsigned().notNullable()
      .references('id').inTable('users');
      table.string('question').notNullable();
      table.string('answer').notNullable();
    })
    .createTable('conditions', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
    })
    .createTable('user_conditions', (table) => {
      table.increments('id').primary();
      table
      .integer('user_id')
      .unsigned().notNullable()
      .references('id').inTable('users')
      table
      .integer('condition_id')
      .unsigned().notNullable()
      .references('id').inTable('conditions');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user_conditions')
    .dropTableIfExists('conditions')
    .dropTableIfExists('questions')
    .dropTableIfExists('users')
};
