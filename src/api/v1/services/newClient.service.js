const { Client, Package } = require("../../../schemas");

const postClientService = async (object) => {
  try {
    console.log('Entrando al servicio de creación de cliente y paquete');

    // Extraer datos para crear el cliente y el paquete
    const { name, address, email, phone, type, description, quantity, weight, express, date, from, to } = object;

    // Crear el nuevo cliente
    const newClient = await Client.create({
      name,
      address,
      email,
      phone,
    });
    console.log("Cliente creado", newClient);

    // Usar el ID del cliente recién creado para crear el paquete
    const newPackage = await Package.create({
      type,
      description,
      quantity,
      weight,
      express,
      date,
      from,
      to,
      package_id: newClient._id,  // Asociar el paquete al cliente
    });
    console.log("Paquete creado", newPackage);

    // Asociar el paquete al cliente y guardar los cambios
    newClient.packages.push(newPackage._id);
    await newClient.save();

    // Retornar tanto el cliente como el paquete creados
    return { newClient, newPackage };

  } catch (error) {
    console.error("Error en la creación de cliente y paquete:", error);
    throw new Error("Error en la creación de cliente y paquete");
  }
};

module.exports = postClientService;

// const { Client, User } = require("../../../schemas");

// const postClientService = async (req, res) => {
//   const { name, address, email, phone } = req.body;
//   // console.log("this is req.body of createClient", name, address, email, phone);
//     const newClient = Client.create({
//       name,
//       address,
//       email,
//       phone,
//     });
//     console.log("new client", newClient);
//     // await newClient.save();
//     // findUser.clients.push(newClient._id);
//     // await findUser.save();
//     // console.log("findUser", findUser);
//     // return { findUser, newClient };

//     return newClient;
// };

// module.exports = postClientService;