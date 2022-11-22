'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn('comments', 'post_id',{
    type:Sequelize.INTEGER
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('comments', 'user_id')
  }
};