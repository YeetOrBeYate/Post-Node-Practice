
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        { recipeid: 1, ingredientid: 2},
        { recipeid: 1, ingredientid: 3},
        { recipeid: 2, ingredientid: 1},
        { recipeid: 3, ingredientid: 4},
        { recipeid: 3, ingredientid: 5},
        { recipeid: 3, ingredientid: 6}
      ]);
    });
};
