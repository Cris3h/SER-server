const { catchAsync, errorHandler } = require("../../../utils");
const { getClients, getClientByName } = require("../services");
const { response } = require("../../../utils");


const getClientsByQuery = async (req, res) => {
  const { name } = req.query;
  const clients = name ? await getClientByName(name) :  await getClients();
  response(res, 200, clients);
};

//higher-order async funtion (HOF)
module.exports = catchAsync(getClientsByQuery);
