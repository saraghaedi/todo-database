"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "js",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "react",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "backend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "frontend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
