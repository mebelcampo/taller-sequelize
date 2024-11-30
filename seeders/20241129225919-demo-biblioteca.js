'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bibliotecas', [ 
      {
        nombre: 'Biblioteca Central',
        ubicacion: 'Calle 10 #5-20, Ciudad Central',
        telefono: '1234567890',
        horario: 'Lunes a Viernes, 8:00 AM - 6:00 PM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Biblioteca Popular',
        ubicacion: 'Carrera 15 #8-50, Barrio Popular',
        telefono: '0987654321',
        horario: 'Lunes a Sábado, 9:00 AM - 5:00 PM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bibliotecas', null, {}); 
  }
};
