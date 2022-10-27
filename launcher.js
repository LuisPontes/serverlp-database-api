const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

//path of root project
global.__basedir = __dirname;


var corsOptions = {
  // origin: "http://localhost:3000"
  // origin: "http://192.168.0.10:3000"
};

app.use(cors(corsOptions));

// database
const db = require("./src/authentication/models");

db.sequelize.sync();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Init mensage
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ServerLp-database-API." });
});

//Authentication routes
require("./src/authentication/routes/auth.routes")(app);
//PetSittingApp domain
// db = require("./src/PetSittingApp/models")(db);
db.pets = require("./src/PetSittingApp/models/pets.model")(db.sequelize, db.Sequelize);
db.reserves = require("./src/PetSittingApp/models/reserves.model.js")(db.sequelize, db.Sequelize);
db.users = require("./src/PetSittingApp/models/user.model.js")(db.sequelize, db.Sequelize);
db.userRoles = require("./src/authentication/models/userRole.model.js")(db.sequelize, db.Sequelize);
db.serviceTax = require("./src/PetSittingApp/models/service_tax.model.js")(db.sequelize, db.Sequelize);
require("./src/PetSittingApp/routes/PetSittingApp.routes.js")(app);

// // DOmain Examples routes
// db = require("./src/Domain_example/models")(db);
// db.example = require("./src/Domain_example/models/example.model.js")(db.sequelize, db.Sequelize);
// db.images = require("./src/Domain_example/models/image.model.js")(db.sequelize, db.Sequelize);

// require("./src/Domain_example/routes/user.routes")(app);

// shedulePetSittingApp domain
// db = require("./src/PetSittingApp/models")(db);
// require("./src/PetSittingApp/routes/PetSittingApp.routes.js")(app);

// // Generic routes
// require("./src/generic/routes/api.routes.js")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
