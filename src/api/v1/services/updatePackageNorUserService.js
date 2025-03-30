const { Package, Client } = require("../../../schemas");
const mongoose = require("mongoose");

const updateUserAndPackagesService = async ({ id, data }) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("ID inválido");
        }
        const clientFields = ["name", "email", "phone", "address"];
        const clientData = {};
        const packageData = {};

        for (const key in data) {
            if (clientFields.includes(key)) {
                clientData[key] = data[key];
            } else {
                packageData[key] = data[key];
            }
        }

        let updatedClient = await Client.findById(id)

        if (!updatedClient) {
            throw new Error('No se encontró a cliente')
        }

        if (Object.keys(clientData).length > 0) {
            updatedClient = await Client.findByIdAndUpdate(id, clientData, { new: true, runValidators: true });
        }

        if (Object.keys(packageData).length > 0) {
            await Package.updateMany(
                { _id: { $in: updatedClient.packages } },
                { $set: packageData },
                { new: true, runValidators: true }
            );
        }
        return await Client.findById(id).populate("packages");
    } catch (error) {
        console.error(`❌ Error al actualizar: ${error.message}`);
        return {errror: error.message};
    }
};

module.exports = updateUserAndPackagesService;
