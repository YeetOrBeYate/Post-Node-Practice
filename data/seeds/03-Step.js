
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step').del()
    .then(function () {
      // Inserts seed entries
      return knex('step').insert([
        { name: 'Assemble Sandwhich', step_number: 1},
        { name: 'Grill Sandwhich', step_number: 2},
        { name: 'Crack Eggs', step_number: 1},
        { name: 'Cook Eggs', step_number: 2},
        { name: 'Mix Pancake, Egg, and Water', step_number: 1},
        { name: 'Cook Pancake', step_number: 2}
      ]);
    });
};
