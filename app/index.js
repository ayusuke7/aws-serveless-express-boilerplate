"use strict";

const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const cors = require("cors");
const expressMiddleware = require("aws-serverless-express/middleware");
const authMiddleware = require("./middlewares/auth");

/* Configure env */
dotenv.config({ path: path.resolve(__dirname, "../.env") });

/* Routes */
const auth = require("./routes/auth");
const user = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(expressMiddleware.eventContext());

/* Unprotect Routes, ex: Login and Register */
app.use(auth);

/* Routes protect with Middleware JWT */
const middleware = authMiddleware();

app.use("/user", middleware, user);

module.exports = app;
