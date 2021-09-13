const User = require("./models").user;

const { Op } = require("sequelize");

async function getAllUsers() {
  try {
    //const allUsers = await User.findAll();
    // return allUsers.map((user) => user.toJSON());
    // const specificUser = await User.findOne({ where: { name: "sara" } });
    // return specificUser;
    // const userByPk = await User.findByPk(3);
    // return userByPk;
    // const tallUsers = await User.findAll({ where: { id: { [Op.gte]: 2 } } });
    // console.log(tallUsers);
    // const result = await User.findAndCountAll({
    //   where: {
    //     id: {
    //       [Op.gte]: 2,
    //     },
    //   },
    //   offset: 0,
    //   limit: 2,
    // });
    // console.log("count", result.count);
    // console.log("Rows", result.rows);

    const jane = await User.create({
      name: "kkkkk",
      email: "hhjjhhhfh@mmm.com",
      phone: 1223456,
      password: "122344",
    });
    console.log(jane.toJSON());
  } catch (e) {
    console.log(e.message);
  }
}

getAllUsers().then((users) => console.log(users));
