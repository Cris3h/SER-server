const { errorHandler, response, catchAsync } = require("../../../utils");
const { login } = require("../services");

const loginUserController = async (req, res) => {
    console.log('we r at login controller')
    const { username, password } = req.body;
    console.log('this is the body of login controller', username, password)

    if (!username || !password) throw new errorHandler.ClientError('Missing parameters. Check the fields', 400);

    const loginUser = await login(req, res);
    response(res, 200, loginUser); 

};

module.exports = catchAsync(loginUserController);