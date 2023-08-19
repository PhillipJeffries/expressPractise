npx knex init
npx knex migrate:make todos
npx knex migrate:latest
====================================
npx knex seed:make 001-todo-seeds 

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