
const db = require("../../authentication/models");

const Pets = db.pets;
const Reserve = db.reserves;
const Users = db.users;
const UserRoles = db.userRoles;
const ServiceTax = db.serviceTax;


const Op = db.Sequelize.Op;

exports.addPet = (req, res) => {
  // console.log("req.body",req.body);
  Pets.create(
    {
      owner: req.userId,
      name: req.body.NewPet.name,
      age: req.body.NewPet.age,
      breed: req.body.NewPet.breed
    }
  ).then(cody => {
    // console.log("cody : ",cody);
    // res.status(200).send({ message: "Pet registered successfully!" });
    this.getPets(req, res);
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


exports.deletePet = (req, res) => {
  // console.log("req.body",req.body);
  Pets.destroy(
    {
      where: {
        id: req.body.id,
        owner: req.userId
      }
    }
  ).then(cody => {
    // console.log("cody : ",cody);
    // res.status(200).send({ message: "Pet deleted successfully!" });
    this.getPets(req, res);
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getPets = (req, res) => {
  // console.log("req.userId ", req.userId);
  Pets
    .findAndCountAll({
      where: {
        owner: req.userId
      }
    })
    .then(function (result) {
      // console.log(result.count);
      // console.log(result.rows);
      res.status(200).send(result);
    }).catch(err => {
      res.status(500).send({ message: err.message });
    });

};

exports.getReserves = (req, res) => {
  // console.log("RESERVE ADD :  ", req.body);
  Reserve
    .findAndCountAll({
      where: {
        owner: req.userId
      }
    })
    .then(function (result) {
      // console.log(result.count);
      // console.log(result.rows);
      res.status(200).send(result);
    }).catch(err => {
      // console.log("err.message : ", err);
      res.status(500).send({ message: err.message });
    });

};


exports.addReserve = (req, res) => {
  // console.log("addReserve req.body", req.body);
  Reserve.create(
    {
      owner: req.userId,
      start: req.body.NewEvent.start,
      end: req.body.NewEvent.end,
      resourceId: req.body.NewEvent.resourceId,
      title: req.body.NewEvent.title,
      rrule: req.body.NewEvent.rrule,
      bgColor: req.body.NewEvent.bgColor,
      status: req.body.NewEvent.status,
      price: req.body.NewEvent.price,
      numHours: req.body.NewEvent.numHours,
      status: req.body.NewEvent.status,
      comments: req.body.NewEvent.comments,
      petSiter: req.body.NewEvent.petSiter,
      reportId: req.body.NewEvent.reportId
    }
  ).then(cody => {
    // console.log("cody : ",cody);
    // res.status(200).send({ message: "Pet registered successfully!" });
    this.getReserves(req, res);
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


exports.deleteEvent = (req, res) => {
  // console.log("req.body",req.body);
  Reserve.destroy(
    {
      where: {
        id: req.body.id,
        owner: req.userId
      }
    }
  ).then(cody => {
    // console.log("cody : ",cody);
    // res.status(200).send({ message: "Pet deleted successfully!" });
    this.getReserves(req, res);
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};



exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};


exports.getOpenReserves = (req, res) => {
  // console.log("RESERVE ADD :  ", req.body);

  Pets.belongsTo(Users, { foreignKey: 'owner' });
  Reserve.belongsTo(Pets, { foreignKey: 'resourceId' });
  Reserve
    .findAll({
      include: [{ model: Pets, include: [{ model: Users }] }],
      where: {
        status: 0
      }
    })
    .then(function (result) {
      // console.log(result.count);
      // console.log(result.rows);
      res.status(200).send(result);
    }).catch(err => {
      // console.log("err.message : ", err);
      res.status(500).send({ message: err.message });
    });

};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
exports.adminUsers = (req, res) => {
  // console.log("req.userId ", req.userId);

  // Users.belongsTo(UserRoles);
  UserRoles.belongsTo(Users);
  UserRoles.findAndCountAll({
    include: [{ model: Users }]
  }).then(function (result) {
    // console.log(result.count);
    // console.log(result.rows);
    res.status(200).send(result);
  }).catch(err => {
    // console.log("err.message : ", err);
    res.status(500).send({ message: err.message });
  });
};
exports.adminUserRoleUpdate = (req, res) => {
  // console.log("req.userId ", req.userId);
  UserRoles.create({

    roleId: req.body.id,
    userId: req.userId

  }).then(function (result) {
    // console.log(result.count);
    // console.log(result.rows);
    res.status(200).send(result);
  }).catch(err => {
    // console.log("err.message : ", err);
    res.status(500).send({ message: err.message });
  });
};


exports.adminGetServie = (req, res) => {
  // console.log("req.userId ", req.userId);

  ServiceTax.findAll({

  }).then(function (result) {
    // console.log(result.count);
    // console.log(result.rows);
    res.status(200).send(result);
  }).catch(err => {
    // console.log("err.message : ", err);
    res.status(500).send({ message: err.message });
  });
};
exports.adminUpdateServie = (req, res) => {
  // console.log("req.userId ", req.userId);
  ServiceTax.create({

    type: req.body.type,
    hours: req.body.hours,
    priceHour: req.body.pricehour


  }).then(function (result) {
    // console.log(result.count);
    // console.log(result.rows);
    // res.status(200).send(result);
    this.adminGetServie(req, res);
  }).catch(err => {
    // console.log("err.message : ", err);
    res.status(500).send({ message: err.message });
  });
};

