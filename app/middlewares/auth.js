const jwt = require("jsonwebtoken");

module.exports = (unlessPath = []) => {
  return async function (req, res, next) {
    const pathValid = unlessPath?.some((path) => path === req.path);

    if (pathValid) return next();

    const { authorization } = req.headers;

    if (!authorization)
      return res.status(401).send({ message: "request not authorized" });

    const token = authorization.replace("Bearer", "").trim();

    try {
      const tokenPayload = jwt.verify(token, process.env.KEY_JWT);

      /* Insert Property User in Token JWT*/
      req["user"] = tokenPayload;

      return next();
    } catch (e) {
      return res.status(500).send({ message: e });
    }
  };
};
