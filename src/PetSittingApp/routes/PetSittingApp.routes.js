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

  //ALl
  app.get("/api/test/all", controller.allAccess);
  app.get("/api/pet/servicetax", controller.adminGetServie);

//*Clients */
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

 //*Workers */
  app.get(
    "/api/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
  
  app.get(
    "/api/mod/openReserves",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.getOpenReserves
  );

//*Administrators */
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
  app.get(
    "/api/admin/users",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminUsers
  );
  app.post(
    "/api/admin/user_role",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminUserRoleUpdate
  );
  app.get(
    "/api/admin/servicetax",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminGetServie
  );
  app.post(
    "/api/admin/servicetax",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminUpdateServie
  );
  app.get(
    "/api/admin/openReserves",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getOpenReserves
  );
};
