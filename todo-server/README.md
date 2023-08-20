npx knex init
====================================
npx knex migrate:make todos
------------------------------------
exports.up = async knex => {
  await knex.schema.createTable('todos', tbl => {
    tbl.increments();
    tbl.text('message', 250).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async knex => {
  await knex.schema.dropTableIfExists('todos');
};

====================================
npx knex migrate:latest
====================================
npx knex seed:make 001-todo-seeds 
------------------------------------
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').truncate()
  await knex('todos').insert([
    {
      id: 1,
      message: "take a break"
    },
    {
      id: 2,
      message: "work"
    },
    {
      id: 3,
      message: "sleep"
    }
  ]);
};
====================================
npx knex seed:run