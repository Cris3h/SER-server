module.exports = {
    getClients: require("./allClients.service"),
    getClientByName: require("./findClientByName.js"),

    getPackages: require("./clientPackages.service"),
    postPackage: require("./newPackage.service"),

    postClient: require("./newClient.service.js"),

    signUp: require("./signUp.service.js"),

    login: require('./login.service.js'),

    deletePackage: require("./deletePackage.service"),

    getAllPackagesForLength: require("./getPackages.js"),
};