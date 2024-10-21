const { Client, Package } = require("../../../schemas");

const newPackageService = async (object) => {
  console.log('entro al servicio');
  const { type, description, quantity, weight, express, date, from, to ,id } = object;

  
  const findSingleClient = await Client.findById(id);

  console.log('encontro el cliente', findSingleClient);

  if (!findSingleClient) {
    return "Client not found";
  }

  const newPackage = new Package({
    type,
    description,
    quantity,
    weight,
    express,
    date,
    from,
    to,
  });
  console.log("new package", newPackage);
  await newPackage.save();
  findSingleClient.packages.push(newPackage._id);
  await findSingleClient.save();

  return { findSingleClient, newPackage };
};

module.exports = newPackageService;
