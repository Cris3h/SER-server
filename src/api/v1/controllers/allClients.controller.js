const { catchAsync } = require("../../../utils");
const { getClients, getClientByName } = require("../services");
const { response } = require("../../../utils");


const getAllClients = async (req, res) => {
  const { name } = req.query;
  // console.log('this is getAllClients controller folder',name)
  const clients = name ? await getClientByName(name) : await getClients();

  response(res, 200, clients);
};

//higher-order async funtion (HOF)
module.exports = catchAsync(getAllClients);
