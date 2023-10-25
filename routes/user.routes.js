//user.routes.js
const { verifyToken, isAdmin, isModerator, isModeratorOrAdmin } = require("../middleware/authJwt");
const controller = require("../controllers/user.controller");
const db = require("../models");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", (req, res, next) => {
    verifyToken(req, res, () => {
      controller.userBoard(req, res);
    });
  });

  app.get("/api/test/mod", (req, res, next) => {
    verifyToken(req, res, () => {
      isModerator(req, res, () => {
        controller.moderatorBoard(req, res);
      });
    });
  });

  app.get("/api/test/admin", (req, res, next) => {
    verifyToken(req, res, () => {
      isAdmin(req, res, () => {
        controller.adminBoard(req, res);
      });
    });
  });

  app.get('/api/users', verifyToken, controller.getUsers);

  
};


/*
//user.routes.js
const { authJwt } = require("../middleware");
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

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
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
*/

/*
//user.routes.js рабочий
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

function handleAllAccess(req, res) {
  res.send("All Access");
}

function handleUserBoard(req, res) {
  res.send("User Board");
}

function handleModeratorBoard(req, res) {
  res.send("Moderator Board");
}

function handleAdminBoard(req, res) {
  res.send("Admin Board");
}

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", handleAllAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    handleUserBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    handleModeratorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    handleAdminBoard
  );
};
*/


/*
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  const express = require('express');
  const router = express.Router();

  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.get("/test/all", controller.allAccess);

  router.get(
    "/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  router.get(
    "/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  router.get(
    "/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.use('/api/user', router);
};
*/