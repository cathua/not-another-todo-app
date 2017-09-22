'use strict';
module.exports = (sequelize, DataTypes) => {
  var destination = sequelize.define('destination', {
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return destination;
};
