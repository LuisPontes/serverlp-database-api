const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//path of root project
global.__basedir = __dirname;


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Init mensage
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ServerLp-database-API." });
});

// Generic routes
require("./src/generic/routes/api.routes.js")(app);

// DOmain Examples routes
require("./src/Domain_example/routes/domain.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
