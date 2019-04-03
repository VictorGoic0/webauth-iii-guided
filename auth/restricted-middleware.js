const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = "Keep it secret";
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        res.status(400).json({ message: "Invalid credentials" });
      } else {
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No credentials provided" });
  }
};
