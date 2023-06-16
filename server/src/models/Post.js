module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    "Posts",
    {
      image: Sequelize.STRING,
      caption: Sequelize.STRING,
    },
    {
      paranoid: true,
    }
  );
  return Post;
};
