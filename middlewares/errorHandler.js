module.exports = (err, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;

  res.status(statusCode);
  res.send({ message: err.message });
};
