"use strict";

const userController = {
  async all(req, res) {
    // Example get userin token Authorizatioon => req.user
    res.status(200).json({ message: "all method" });
  },
  async find(req, res) {
    res.status(200).json({ message: "find method" });
  },
  async update(req, res) {
    res.status(200).json({ message: "update method" });
  },
  async delete(req, res) {
    res.status(200).json({ message: "delete method" });
  },
};

module.exports = userController;
