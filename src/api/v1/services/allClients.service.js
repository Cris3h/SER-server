const { Client } = require("../../../schemas");

const allClientsService = async () => {
  try {
    const client = await Client.find();
    return client;
  } catch (error) {
    console.log(error);
  }
};

module.exports = allClientsService;