module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("Users", {
    fullName: Sequelize.STRING,
    email: Sequelize.STRING,
    avatar: Sequelize.BLOB("long"),
    avatar_url: Sequelize.TEXT,
    userName: Sequelize.STRING,
    password: Sequelize.STRING,
    bio: Sequelize.STRING,
  });
  return User;
};
