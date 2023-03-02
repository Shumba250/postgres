"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameColumn("Users", "createdAt", "created_at");
		await queryInterface.renameColumn("Users", "updatedAt", "updated_at");
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.renameColumn("Users", "created_at", "createdAt");
		await queryInterface.renameColumn("Users", "updated_at", "updatedAt");
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	},
};
