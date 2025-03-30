const { Client, Package } = require("../../../schemas");

const postNewPackageAndCostumer = async (object) => {
  try {
    console.log('Entrando al servicio de creación de cliente y paquete');
    const { name, address, email, phone, type, description, quantity, weight, express, date, from, to } = object;

    const findClient = await Client.find({ name: { $regex: name, $options: "i" } });

    // no match means no user registered with this name
    if (findClient.length === 0 || !findClient) {
      // creates user
      const newClient = await Client.create({
        name,
        address,
        email,
        phone,
      });
      // and user package
      const newPackage = await Package.create({
        type,
        description,
        quantity,
        weight,
        express,
        date,
        from,
        to,
        package_id: newClient._id,
      });

      // saves it
      newClient.packages.push(newPackage._id);
      await newClient.save();

      return { newClient, newPackage };
    }

    // match means user has been found so we just create the package
    const newPackage = await Package.create({
      type,
      description,
      quantity,
      weight,
      express,
      date,
      from,
      to,
      package_id: findClient._id,
    });

    // saves it
    findClient[0].packages.push(newPackage._id);
    await findClient[0].save();
    return { findClient, newPackage };
    
  } catch (error) {
    return {
      error: "Error en la creación de cliente y paquete",
      reason: error.message
    };
  }
};

module.exports = postNewPackageAndCostumer;