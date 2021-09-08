const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authController = {
  async autenticate(req, res) {
    try {
      const { password } = req.body;

      // exampple of User searche in Database password 12345678
      const user = {
        email: "teste@gmail.com",
        password:
          "$2a$07$sxUwuxrgA2OzzOP1u/A5zODS7NuDjDZPw8uIGCekiEyJ6jyy1hXxa",
      };

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        return res.status(403).send({ message: "Email or Password inválid" });
      }

      const token = jwt.sign(user, process.env.KEY_JWT, { expiresIn: "1d" });

      return res.send({ token, user });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  },

  async register(req, res) {
    try {
      const password = bcrypt.hashSync("12345678", 7);

      return res.send({ result: "User Created", password });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  },
};

module.exports = authController;
