const { catchAsync, response } = require("../../../utils");
const { getAllPackagesForLength } = require("../services");

const allPackagesController = async (req, res) => {
  const packages = await getAllPackagesForLength();
  response(res, 200, packages);
};

module.exports = catchAsync(allPackagesController);