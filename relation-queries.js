const { user, todoItem, todoList, tag } = require("./models");

// async function listsWithUsers() {
//   const lists = await todoList.findAll({
//     include: [user],
//   });

//   return lists.map((list) => list.toJSON());
// }

// async function listsWithUsers() {
//   const lists = await todoList.findAll({
//     include: [{ model: user, attributes: ["name"] }],
//   });
//   return lists.map((list) => list.toJSON());
// }
// listsWithUsers().then((lists) => console.log(lists));

// async function getUsers() {
//   const allUsers = await user.findAll({
//     include: { model: todoList, attributes: ["name"] },
//   });
//   return allUsers.map((user) => user.toJSON());
// }

// getUsers().then((users) => console.log(users));

// Get one user by id with his lists.

// async function listOfOneUser(userId) {
//   try {
//     const userList = await user.findOne({
//       where: { id: userId },
//       include: [todoList],
//     });
//     return userList.toJSON();
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// listOfOneUser(1).then((user) => console.log(user));

// Get important TodoItems with the name of the list they belong to.

// async function importantTodos() {
//   try {
//     const list = await todoItem.findAll({
//       where: { important: true },
//       include: { model: todoList, attributes: ["name"] },
//     });
//     return list.map((item) => item.toJSON());
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// importantTodos().then((item) => console.log(item));

// Get one user by id with his lists, which also contain their belonging TodoItem's task attribute.

// async function listOfOneUserWithDetails(userId) {
//   try {
//     const userList = await user.findOne({
//       where: { id: userId },
//       include: [
//         {
//           model: todoList,
//           include: [{ model: todoItem, attributes: ["task"] }],
//         },
//       ],
//     });
//     return userList.toJSON();
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// listOfOneUserWithDetails(1).then((user) => console.log(user));

//finds all todoItems with their corresponding tags.

async function todoitemsWithTags() {
  try {
    const list = await todoItem.findAll({ include: [tag] });
    return list.map((item) => item.toJSON());
  } catch (e) {
    console.log(e.message);
  }
}

todoitemsWithTags().then((item) => console.log(item));
