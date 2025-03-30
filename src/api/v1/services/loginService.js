const { User } = require("../../../schemas");
const { errorHandler } = require("../../../utils");
const bcrypt = require('bcrypt');

const loginService = async (req, res) =>{
    const { username, password } = req.body;

    
    const user = await User.findOne({ username: username});
    if (!user) throw new errorHandler.ClientError('the login credentials are wrong. Check your user syntax', 400);

    const userValidated = await bcrypt.compare(password, user.password);
    if(!userValidated) throw new errorHandler.ClientError('the login credentials are wrong. Check your password syntax', 400);
    console.log('we got here')
    return user;
};

module.exports = loginService;