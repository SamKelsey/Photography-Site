if (process.env.NODE_ENV === "production") {
  /// we are in prod
  module.exports = {
    USER: process.env.USER,
    PASS: process.env.PASS,
  };
} else {
  // we are in dev env
  module.exports = require("./dev");
}
