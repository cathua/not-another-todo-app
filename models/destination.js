'use strict';
module.exports = (sequelize, DataTypes) => {
  var destination = sequelize.define('destination', {
    destination: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return destination;
};