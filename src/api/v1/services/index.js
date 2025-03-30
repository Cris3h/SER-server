module.exports = {
    getClients: require("./allClientsService.js"),
    getClientByName: require("./findClientByNameService.js"),

    postNewPackageAndClient: require("./postPackageAndClientService.js"),
    signUp: require("./signUpService.js"),
    login: require('./loginService.js'),
    deletePackage: require("./deletePackageService.js"),
    updatePackageNorUserService: require("./updatePackageNorUserService.js"),
};