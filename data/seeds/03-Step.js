
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('step').insert([
        { name: 'Assemble Sandwhich', Step_Number: 1},
        { name: 'Grill Sandwhich', Step_Number: 2},
        { name: 'Crack Eggs', Step_Number: 1},
        { name: 'Cook Eggs', Step_Number: 2},
        { name: 'Mix Pancake, Egg, and Water', Step_Number: 1},
        { name: 'Cook Pancake', Step_Number: 2}
      ]);
    });
};
