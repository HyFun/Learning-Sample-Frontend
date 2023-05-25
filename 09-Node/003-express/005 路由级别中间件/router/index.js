const home = require("./home");
const user = require("./user");

module.exports = function register(app) {
  app.use("/home", home);
  app.use("/user", user);
};
