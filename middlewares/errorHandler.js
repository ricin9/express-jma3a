module.exports = (err, req, res, next) => {
  
  // by default express sends statusCode 200 even in exceptions
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;

  res.status(statusCode).json({message : err.message});
};
