'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categoria', [{
            nombre: 'Categoria_test',
            descripcion: 'lorem limsus test',
            estado: 1,
            createdAt: new Date(),
            updatedAt: new Date()

        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categoria', null, {});
    }
};