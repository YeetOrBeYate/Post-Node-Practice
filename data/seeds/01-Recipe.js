
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        { name: 'Grilled Cheese'},
        { name: 'Scrambled Eggs'},
        { name: 'Pancake'}
      ]);
    });
};
