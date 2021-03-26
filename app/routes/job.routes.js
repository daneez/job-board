module.exports = app => {
  const jobs = require("../controllers/job.controller.js");

  var router = require("express").Router();

  // Retrieve all Jobs
  router.get("/", jobs.findAll);

  // Retrieve a single Job with id
  router.get("/:id", jobs.findOne);

  app.use('/api/jobs', router);
};