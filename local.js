"use strict";

const app = require("./app");

app.listen(3333, () => {
  console.log(`Server started at ${new Date().toJSON()}`);
});
