const { postClient } = require("../services");
const { catchAsync, response, errorHandler } = require("../../../utils");

const postClientController = async (req, res) => {
  console.log("this is req.body of createClient", req.body);
  
  if(!req.body.name || !req.body.address || !req.body.email || !req.body.phone) throw new errorHandler.ClientError("Missing parameters. Check your syntax", 400);
  const newClient = await postClient(req.body, res);

  response(res, 200, newClient);
};

//higher-order async funtion (HOF)
module.exports = catchAsync(postClientController);
