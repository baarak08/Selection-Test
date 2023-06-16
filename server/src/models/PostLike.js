module.exports = (sequelize, Sequelize) => {
  const PostLike = sequelize.define("PostLikes", {
    status: Sequelize.ENUM("LIKE", "UNLIKE"),
  });
  return PostLike;
};
