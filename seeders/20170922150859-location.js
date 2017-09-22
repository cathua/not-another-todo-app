'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('destinations', [{
      destination: 'Sydney',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      destination: 'Amsterdam',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      destination: 'Tokyo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      destination: 'Vancouver',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      destination: 'Hong Kong',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
