module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("Comments", {
    date: Sequelize.DATE,
    comment: Sequelize.TEXT,
  });
  return Comment;
};
