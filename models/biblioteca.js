'use strict';

module.exports = (sequelize, DataTypes) => {
  const biblioteca = sequelize.define(
    'biblioteca',
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true, 
        },
      },
      autor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      anio_publicacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 1500,
          max: new Date().getFullYear(), 
        },
      },
      disponibilidad: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: 'biblioteca', 
      timestamps: true, 
    }
  );

  return biblioteca;
};
