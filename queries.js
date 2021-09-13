const User = require("./models").user;
const ToDoItems = require("./models").todoItem;

//***Searches for all users and logs them.***

// async function getAllUsers() {
//   try {
//     const usersList = await User.findAll();
//     return usersList.map((item) => item.toJSON());
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// getAllUsers().then((item) => console.log(item));

// ******Searches for all TodoItems and logs them (use .toJSON()).*****

// async function getAllToDoItems() {
//   try {
//     const todoItems = await ToDoItems.findAll();
//     return todoItems.map((item) => item.toJSON());
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// getAllToDoItems().then((item) => console.log(item));

// ****** Searches for a user by primary key.******
// async function findUserByID() {
//   try {
//     const user = await User.findOne({ where: { id: 2 } });
//     return user;
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// findUserByID().then((item) => console.log(item));

//*******Creates a new user*******

// async function createUser() {
//   try {
//     const newUser = await User.create({
//       name: "new user",
//       email: "jjjj@hhhh.com",
//       password: "1637783",
//       phone: 87278477,
//     });
//     return newUser.toJSON();
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// createUser().then((item) => console.log(item));

// ******Searches only for important TodoItems******

async function importantItems() {
  try {
    const item = await ToDoItems.findAll({
      where: {
        important: true,
      },
    });
    return item;
  } catch (e) {
    console.log(e.message);
  }
}

importantItems().then((item) => console.log(item));
