const { HttpError } = require("../helpers");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const { KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(HttpError(401));
  }

  try {
    const { id } = jwt.verify(token, KEY);

    const user = await User.findById(id);

    if (!user) {
      next(HttpError(401));
    }
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(401));
  }
};

module.exports = {
  authenticate,
};
