"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "item1",
          deadLine: "september",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "item2",
          deadLine: "september",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "item3",
          deadLine: "september",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "item4",
          deadLine: "september",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
