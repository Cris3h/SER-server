const { Package, Client } = require("../../../schemas");

const deletePackageService = async (id) => {
  
    // if (!id) throw new Error("ID is required");
    // const findClient = await Client.findByIdAndDelete(id);
    // console.log('findClient', findClient);
    // //if client is not found, throw error
    // if (!findClient) throw new Error("Client not found");
    // return findClient;

  if (!id) throw new Error("ID is required");

  //find package by id and delete it
  const findPackage = await Package.findByIdAndDelete(id);
  console.log('findPackage', findPackage);

  //if package is not found, throw error
  if (!findPackage) throw new Error("Package not found");

  //look for the reference in the user schema
  //and update
  await Client.updateOne(
    { packages: id },      
    { $pull: { packages: id } } 
  );


  return findPackage;

};

module.exports = deletePackageService;