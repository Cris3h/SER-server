const { Package, Client } = require("../../../schemas");

const clientPackagesService = async (id) => {

    const findSingleClient = await Client.findById(id);
    //Error handled here; 
    if (!findSingleClient) throw new Errror('Client not found') ;

    const clientPackagesId = findSingleClient.packages;
    console.log(clientPackagesId);

    const clientPackagePromise = await Promise.all(clientPackagesId.map(async (id) => {
      const clientPackage = await Package.findById(id);
      return clientPackage;
    }));  
    
    return clientPackagePromise;
};

module.exports = clientPackagesService;