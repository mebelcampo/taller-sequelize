'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('biblioteca', [ 
      {
        titulo: 'El Principito',
        autor: 'Antoine de Saint-Exupéry',
        anioPublicacion: 1943,
        disponibilidad: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Cien Años de Soledad',
        autor: 'Gabriel García Márquez',
        anioPublicacion: 1967,
        disponibilidad: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: '1984',
        autor: 'George Orwell',
        anioPublicacion: 1949,
        disponibilidad: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('biblioteca', null, {}); 
  }
};
