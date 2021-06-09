module.exports = app => {
  const controller = require("../controllers/api.controller.js");


  app.get("/api/:schema/:table/:id", controller.findOne);

  // Retrieve all api
  app.get("/api/:schema/:table", controller.findAll);

  // Create a new Customer
  // app.post("/api", controller.create);

  // Retrieve all api
  //  app.get("/api", controller.findAll);

  // Retrieve a single Customer with customerId
  //  app.get("/api/:customerId", controller.findOne);

  // Update a Customer with customerId
  //   app.put("/api/:customerId", controller.update);

  // Delete a Customer with customerId
  //   app.delete("/api/:customerId", controller.delete);

  // Create a new Customer
  //   app.delete("/api", controller.deleteAll);
};