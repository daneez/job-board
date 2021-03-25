module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define("job", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    location: {
      type: Sequelize.STRING
    },
    applicants: {
      type: Sequelize.STRING
    }
  });

  return Job;
};