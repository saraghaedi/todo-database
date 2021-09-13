"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "first List",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "second List",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "thirs List",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
