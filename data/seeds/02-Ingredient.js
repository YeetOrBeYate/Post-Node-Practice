
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        { name: "Egg", Unit:"Eggs", Measurement: 3.00},
        { name: 'Cheese Slice', Unit:"Slices", Measurement: 1.00},
        { name: 'Bread Slice', Unit:"Slices", Measurement: 2.00},
        { name: 'Pancake Mix', Unit:"Cups", Measurement: 1.00},
        { name: 'Water', Unit:"Cups", Measurement: .33},
        { name: 'Egg', Unit:"Eggs", Measurement: 3.00}
      ]);
    });
};
