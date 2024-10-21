const { catchAsync, response, errorHandler } = require("../../../utils");
const { getPackages } = require("../services");

const getUserPackagesController = async (req, res, next) => {
  const { id } = req.params;
  //400 = bad syntax
  if (!id) throw new errorHandler.ClientError("ID is required", 400);

  const packages = await getPackages(id);
  //404 = not found
  if (!packages) throw new errorHandler.ClientError("ID not found", 404);

  response(res, 200, packages);
};

//higher-order async funtion (HOF)
module.exports = catchAsync(getUserPackagesController);
