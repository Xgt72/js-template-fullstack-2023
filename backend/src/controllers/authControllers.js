/* eslint-disable prefer-destructuring */
require("dotenv").config();
const jwt = require("jsonwebtoken");
const models = require("../models");

const { JWT_SECRET, JWT_EXPIRESIN, JWT_SECURE, JWT_COOKIE_MAXAGE } =
  process.env;

const createToken = (req, res) => {
  const { id, role } = req.body;

  jwt.sign(
    { id, role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRESIN },
    (err, token) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res
          .cookie("jwtToken", token, {
            httpOnly: true,
            secure: JWT_SECURE === "true",
            maxAge: parseInt(JWT_COOKIE_MAXAGE, 10),
          })
          .json(req.body);
      }
    }
  );
};

const verifyToken = (req, res, next) => {
  const token = req.cookies.jwtToken;
  if (!token) {
    // res.status(401).send("You're not login");
    next();
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        req.body = { ...req.body, ...decoded };
        next();
      }
    });
  }
};

const isUserOrAdmin = (req, res, next) => {
  if (req.body.role === "User" || req.body.role === "Admin") {
    next();
  } else {
    res.sendStatus(401);
  }
};

const isAdmin = (req, res, next) => {
  if (req.body.role === "Admin") {
    next();
  } else {
    res.sendStatus(401);
  }
};

const refreshToken = (req, res, next) => {
  if (!req.body.role) {
    models.user
      .find(req.body.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(401);
        } else {
          req.body = rows[0];
          next();
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    models.doctor
      .find(req.body.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(401);
        } else {
          req.body = rows[0];
          next();
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

module.exports = {
  createToken,
  verifyToken,
  isUserOrAdmin,
  isAdmin,
  refreshToken,
};
