const errorResponse = (res, statusCode, data) => {
  res.status(statusCode).json({
    error: true,
    message: data,
  });
};

module.exports = errorResponse;
