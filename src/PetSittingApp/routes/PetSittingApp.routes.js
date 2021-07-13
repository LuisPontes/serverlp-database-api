const { authJwt } = require("../../authentication/middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  //PETS
  app.post(
    "/api/pet/newpet",
    [authJwt.verifyToken],
    controller.addPet
  );

  app.get(
    "/api/pet/mypets",
    [authJwt.verifyToken],
    controller.getPets
  );

  app.post(
    "/api/pet/deletePet",
    [authJwt.verifyToken],
    controller.deletePet
  );

//Reserves
  app.get(
    "/api/pet/reserves",
    [authJwt.verifyToken],
    controller.getReserves
  );
  app.post(
    "/api/pet/newevent",
    [authJwt.verifyToken],
    controller.addReserve
  );
  app.post(
    "/api/pet/deleteEvent",
    [authJwt.verifyToken],
    controller.deleteEvent
  );
 



  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
