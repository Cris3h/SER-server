//Higher-order funtion: takes funtions as argument returns a value as its results (or returns another function); 
const catchAsync = (fn) => {
    return (req, res, next) => {
      fn(req, res).catch((err) => next(err));
    };
  };
  
  module.exports = catchAsync;