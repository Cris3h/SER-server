const { Client } = require("../../../schemas");

const allClientsService = async () => {
  try {
    const clients = await Client.find({ 
      packages: { $exists: true, $ne: [] }  // Filtra solo clientes con paquetes
    }).populate('packages');
    
    if (!clients || !clients.length) {
      return {
        error: false,
        message: 'No hay clientes con paquetes registrados'
      };
    }
    return clients;
  } catch (error) {
    return error.message
  }
};

module.exports = allClientsService;