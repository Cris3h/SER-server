const { updatePackageNorUserService } = require("../services");
const { catchAsync, response, errorHandler } = require("../../../utils");

const updatePackageController = async (req, res) => {
  const { body } = req;
  const newPackage = await updatePackageNorUserService(body);
  response(res, 200, newPackage);
};

//higher-order async funtion (HOF)
module.exports = catchAsync(updatePackageController);