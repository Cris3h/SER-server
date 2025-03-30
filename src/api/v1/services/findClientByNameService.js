const { Client } = require("../../../schemas");

const findClientsByName = async (name) => {
    try{
        const client = await Client.find({
          name: {
            //partially matches the name
            $regex: name,
            //CaSe INsensITive
            $options: "i",
          },
        }).populate('packages');
        return client;
    }catch(error){
      return error.message
    }
};

module.exports = findClientsByName;
