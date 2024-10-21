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
        });
        return client;
    }catch(error){

    }
};

module.exports = findClientsByName;
