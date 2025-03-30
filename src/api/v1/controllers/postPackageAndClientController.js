const { postNewPackageAndClient } = require("../services");
const { catchAsync, response, errorHandler } = require("../../../utils");

const postPackageAndClientController = async (req, res) => {
    const { body } = req;
    if (!req.body) throw new errorHandler.ClientError("Missing parameters. Check your syntax", 400);
    const newClient = await postNewPackageAndClient(body, res);
    response(res, 200, newClient);
};

//higher-order async funtion (HOF)
module.exports = catchAsync(postPackageAndClientController);
