
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        { name: "Egg", measurement: 3.00},
        { name: 'Cheese Slice', measurement: 1.00},
        { name: 'Bread Slice', measurement: 2.00},
        { name: 'Pancake Mix', measurement: 1.00},
        { name: 'Water', measurement: .33},
        { name: 'Egg', measurement: 3.00}
      ]);
    });
};
