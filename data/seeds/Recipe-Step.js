
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_step').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_step').insert([
        { recipeid: 1, stepid: 1},
        { recipeid: 1, stepid: 2},
        { recipeid: 2, stepid: 3},
        { recipeid: 2, stepid: 4},
        { recipeid: 3, stepid: 5},
        { recipeid: 3, stepid: 6}
      ]);
    });
};
