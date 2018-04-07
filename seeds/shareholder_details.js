

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shareholder_names').del()
    .then(function () {
      // Inserts seed entries
      return knex('shareholder_names').insert([
        {id: 1, shareholder_number: '123456', Shareholder_name: 'Mark Sprott'},
        {id: 2, shareholder_number: '789012', Shareholder_name: 'Tom Scott'},
        {id: 3, shareholder_number: '890123', Shareholder_name: 'John Doe'}
      ]);
    });
};



