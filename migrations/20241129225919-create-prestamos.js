'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prestamo', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      fecha_prestamo: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fecha_devolucion: {
        type: Sequelize.DATE,
        allowNull: true, 
      },
      estado: {
        type: Sequelize.STRING(15), 
        defaultValue: 'activo',
        allowNull: false,
      },
      libroId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'biblioteca', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
        allowNull: false,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('prestamo');
  },
};
