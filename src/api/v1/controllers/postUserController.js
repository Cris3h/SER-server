const { signUp } = require("../services");
const { catchAsync, response, errorHandler } = require("../../../utils");

const postUserController = async (req, res) => {
  console.log(req.body)
  if (!req.body.username || !req.body.password || !req.body.name || !req.body.email){ 
    throw new errorHandler.ClientError(
      "Missing parameters. Fill all the fields",
      400
    );
  }
  const newUser = await signUp(req, res);
  response(res, 200, newUser);
};

//higher-order async funtion (HOF)
module.exports = catchAsync(postUserController);
