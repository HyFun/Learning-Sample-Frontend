const { getOptions } = require("loader-utils");
const { validate } = require("schema-utils");

const validateJson = require("../validate/babel.json");

const { transform } = require("@babel/core");
const { promisify } = require("util");

const transformAsync = promisify(transform);
module.exports = function (content, map, meta) {
  const options = getOptions(this);
  validate(validateJson, options, {
    name: "loader",
  });
  const callback = this.async();
  transformAsync(content, options)
    .then(({code, map}) => {
      callback(null, code, map, meta);
    })
    .catch((err) => {
      callback(err);
    });
    return content
};
