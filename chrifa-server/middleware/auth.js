const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // get token from header

  const token = req.header("x-auth-token");

  // check if not token
  if (!token) {
    return res.status(401).json({ msg: "no token, authorization denied" });
  }
  // verify token
  try {
    const decoded = jwt.verify(token, config.get("myprivatekey"));
    req.user = {"id" : decoded.id, "role" : decoded.role};
    //res.status(200).json({ msg: "token is valid" });
    next();
  } catch (err) {
    res.status(401).json({ msg: "token is not valid" });
    console.error(err);
  }
};
