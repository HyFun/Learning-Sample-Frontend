module.exports = {
  success(data) {
    return JSON.stringify({
      code: 200,
      message: "success",
      data,
    });
  },
  failed(code, message) {
    return JSON.stringify({
      code,
      message,
    });
  },
};
