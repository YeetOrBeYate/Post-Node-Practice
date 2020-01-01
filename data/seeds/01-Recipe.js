
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('recipe').insert([
        { name: 'Grilled Cheese'},
        { name: 'Scrambled Eggs'},
        { name: 'Pancake'}
      ]);
};
