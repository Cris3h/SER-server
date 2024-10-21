const { catchAsync, response, errorHandler } = require("../../../utils");
const { deletePackage } = require("../services");

const deletePackageController = async (req, res, next) => {
  const { id } = req.params;
  //400 = bad syntax
  if (!id) throw new errorHandler.ClientError("ID is required", 400);

  const package = await deletePackage(id);
  //404 = not found
  if (!package) throw new errorHandler.ClientError("ID not found", 404);

  response(res, 200, package);
};

//higher-order async funtion (HOF)
module.exports = catchAsync(deletePackageController);