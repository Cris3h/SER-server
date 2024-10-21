const { catchAsync, response, errorHandler } = require("../../../utils");
const { postPackage } = require("../services");

const postPackageController = async (req, res, next) => {
  const { id } = req.params;
  if(!id) throw new errorHandler.ClientError("ID param is required. Check your syntax", 400);

  const { type, description, quantity, weight, express, date } = req.body;
  if(!type || !description || !quantity || !weight || !express || !date) throw new errorHandler.ClientError("Missing parameters. Check your body syntax", 400);

  const object = { type, description, quantity, weight, express, date, id };

  const newPackage = await postPackage(object);
  response(res, 200, newPackage);
};

//higher-order async funtion (HOF)
module.exports = catchAsync(postPackageController);
