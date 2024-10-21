const { User } = require("../../../schemas");
const bcrypt = require("bcrypt");
const { errorHandler } = require("../../../utils");

const signUpService = async (req, res) => {
  const { username, password, name, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 13);

  const user = await User.findOne({ email: email });
  if (user) throw new errorHandler.ClientError("user already exists, try a new email", 400);

  const newUser = new User({
    username,
    password: hashedPassword,
    name,
    email,
  });

  await newUser.save();
  return newUser;
};

module.exports = signUpService;
