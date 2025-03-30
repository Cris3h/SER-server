const { Package, Client } = require("../../../schemas");

const deletePackageService = async (id) => {
  try {

    if (!id) throw new Error("ID is required");

    console.log('esto es el ID ---> ', id)

    //find package by id and delete it
    const findPackage = await Package.findByIdAndDelete(id)

    //if package is not found, throws an error
    if (!findPackage) return "Package not found";

    //look for the reference in the user schema
    //and update
    await Client.updateOne(
      { packages: id },
      { $pull: { packages: id } }
    );

    return findPackage;
  } catch (error) {
    return error.message
  }

};

module.exports = deletePackageService;